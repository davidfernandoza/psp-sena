'use strict'
const { Router } = require('express')

/*
 * Rutas de los Modules:
 */

module.exports = ({
	ModulesController,
	OwnersRequests,
	ModulesRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPrivate = ModulesRequest.private.bind(ModulesRequest)
	const requestBody = ModulesRequest.body.bind(ModulesRequest)
	const requestOwner = OwnersRequests.byProject.bind(OwnersRequests)

	/*
	 * Politics:
	 */
	const politics = [
		AdminPolitic.validate.bind(AdminPolitic),
		DevPolitic.validate.bind(DevPolitic)
	]

	/*
	 * Middlewares:
	 */
	const auth = AuthMiddleware.compare.bind(AuthMiddleware)

	/*
	 * Controller:
	 */
	const controller = ModulesController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/by-project/:id',
		requestPrivate,
		auth,
		politics,
		requestOwner,
		controller.getAllByInclude.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * POST:
	 */
	router.post(
		'/',
		requestPrivate,
		auth,
		politics,
		requestBody,
		requestOwner,
		controller.create.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * PUT:
	 */
	router.put(
		'/:id',
		requestPrivate,
		auth,
		politics,
		requestBody,
		requestOwner,
		controller.update.bind(controller)
	)

	return router
}
