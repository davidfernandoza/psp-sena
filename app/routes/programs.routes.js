'use strict'
const { Router } = require('express')

/*
 * Rutas de los Programs:
 */

module.exports = ({
	ProgramsController,
	ProgramsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = ProgramsRequest.private.bind(ProgramsRequest)
	const reqBody = ProgramsRequest.body.bind(ProgramsRequest)
	const reqEnd = ProgramsRequest.endProgram.bind(ProgramsRequest)

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
	const controller = ProgramsController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/by-module/:id',
		reqPrivate,
		auth,
		politics,
		controller.getAllByModule.bind(controller)
	)

	router.get(
		'/by-organization',
		reqPrivate,
		auth,
		politics,
		controller.getAllByOrganization.bind(controller)
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
		controller.update.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * PATCH:
	 */
	router.patch(
		'/end/:id',
		reqPrivate,
		auth,
		politics,
		reqEnd,
		controller.endProgram.bind(controller)
	)

	return router
}
