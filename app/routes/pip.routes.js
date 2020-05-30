'use strict'
const { Router } = require('express')

/*
 * Rutas de los Pip:
 */

module.exports = ({
	AuthMiddleware,
	OwnersRequests,
	PipController,
	AdminPolitic,
	PipRequest,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = PipRequest.private.bind(PipRequest)
	const reqBody = PipRequest.body.bind(PipRequest)
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
	const controller = PipController

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
		controller.getByProgram.bind(controller)
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
