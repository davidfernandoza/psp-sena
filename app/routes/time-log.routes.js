'use strict'
const { Router } = require('express')

/*
 * Rutas de los TimeLog:
 */

module.exports = ({
	TimeLogController,
	TimeLogRequest,
	AuthMiddleware,
	OwnersRequests,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPrivate = TimeLogRequest.private.bind(TimeLogRequest)
	const requestBody = TimeLogRequest.body.bind(TimeLogRequest)
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
	const controller = TimeLogController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/by-program/:id',
		requestPrivate,
		auth,
		politics,
		requestOwner,
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
