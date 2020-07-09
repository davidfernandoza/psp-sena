'use strict'
const { Router } = require('express')

/*
 * Rutas de los Experiences:
 */

module.exports = ({
	ExperiencesController,
	ExperiencesRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = ExperiencesRequest.private.bind(ExperiencesRequest)
	// const reqPublic = ExperiencesRequest.public.bind(ExperiencesRequest)
	const reqBody = ExperiencesRequest.body.bind(ExperiencesRequest)

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
	const controller = ExperiencesController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/by-user/:id',
		reqPrivate,
		auth,
		politics,
		controller.getAllByUser.bind(controller)
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

	return router
}
