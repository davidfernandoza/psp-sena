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
	const reqPrivate = TimeLogRequest.private.bind(TimeLogRequest)
	const reqBody = TimeLogRequest.body.bind(TimeLogRequest)
	const programOwner = OwnersRequests.byProgram.bind(OwnersRequests)

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
		reqPrivate,
		auth,
		politics,
		programOwner,
		controller.getAllByProgram.bind(controller)
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
		programOwner,
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
		programOwner,
		controller.update.bind(controller)
	)

	return router
}
