'use strict'
const { Router } = require('express')

/*
 * Rutas de los ExperiencesLanguages:
 */

module.exports = ({
	ExperiencesLanguagesController,
	ExperiencesLanguagesRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = ExperiencesLanguagesRequest.private.bind(
		ExperiencesLanguagesRequest
	)
	const reqPublic = ExperiencesLanguagesRequest.public.bind(
		ExperiencesLanguagesRequest
	)
	const reqBody = ExperiencesLanguagesRequest.body.bind(
		ExperiencesLanguagesRequest
	)

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
	const controller = ExperiencesLanguagesController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get('/', reqPublic, auth, politics, controller.getAll.bind(controller))

	router.get(
		'/:id',
		reqPrivate,
		auth,
		politics,
		controller.get.bind(controller)
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
		'/',
		reqPrivate,
		auth,
		politics,
		reqBody,
		controller.update.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * DELETE:
	 */
	router.delete(
		'/',
		reqPrivate,
		auth,
		politics,
		controller.delete.bind(controller)
	)

	return router
}
