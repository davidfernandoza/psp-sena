'use strict'
const { Router } = require('express')

/*
 * Rutas de los TestReports:
 */

module.exports = ({
	TestReportsController,
	TestReportsRequest,
	AuthMiddleware,
	OwnersRequests,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = TestReportsRequest.private.bind(TestReportsRequest)
	const reqBody = TestReportsRequest.body.bind(TestReportsRequest)
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
	const controller = TestReportsController

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
