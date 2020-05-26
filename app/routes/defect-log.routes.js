'use strict'
const { Router } = require('express')

/*
 * Rutas de los DefectLog:
 */

module.exports = ({
	DefectLogController,
	DefectLogRequest,
	AuthMiddleware,
	OwnersRequests,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPrivate = DefectLogRequest.private.bind(DefectLogRequest)
	const requestBody = DefectLogRequest.body.bind(DefectLogRequest)
	const requestOwner = OwnersRequests.byProgram.bind(OwnersRequests)

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
	const controller = DefectLogController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/by-program/:id',
		requestPrivate,
		auth,
		politics,
		controller.getAllAttribute.bind(controller)
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
