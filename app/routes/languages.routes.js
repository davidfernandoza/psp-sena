'use strict'
const { Router } = require('express')

/*
 * Rutas de los Languages:
 */

module.exports = ({
	LanguagesController,
	LanguagesRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPrivate = LanguagesRequest.private.bind(LanguagesRequest)
	const requestBody = LanguagesRequest.body.bind(LanguagesRequest)

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
	const controller = LanguagesController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/',
		requestPrivate,
		auth,
		politics,
		controller.getAll.bind(controller)
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
		controller.update.bind(controller)
	)

	return router
}
