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
	const reqPrivate = ModulesRequest.private.bind(ModulesRequest)
	const reqBody = ModulesRequest.body.bind(ModulesRequest)
	const projectOwner = OwnersRequests.byProject.bind(OwnersRequests)

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
		reqPrivate,
		auth,
		politics,
		projectOwner,
		controller.getAllByProject.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * POST:
	 */
	router.post(
		'/',
		reqPrivate,
		auth,
		politics,
		reqBody,
		projectOwner,
		controller.create.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * PUT:
	 */
	router.put(
		'/:id',
		reqPrivate,
		auth,
		politics,
		reqBody,
		projectOwner,
		controller.update.bind(controller)
	)

	return router
}
