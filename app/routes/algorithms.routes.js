'use strict'
const { Router } = require('express')

/*
 * Rutas de los Algorithms:
 */

module.exports = ({
	AlgorithmsController,
	AlgorithmsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPrivate = AlgorithmsRequest.private.bind(AlgorithmsRequest)
	const requestPublic = AlgorithmsRequest.public.bind(AlgorithmsRequest)

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
	const controller = AlgorithmsController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/',
		requestPublic,
		auth,
		politics,
		controller.getAll.bind(controller)
	)

	router.get(
		'/:id',
		requestPrivate,
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
		requestPrivate,
		auth,
		politics,
		controller.create.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * PUT:
	 */
	router.put(
		'/',
		requestPrivate,
		auth,
		politics,
		controller.update.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * DELETE:
	 */
	router.delete(
		'/',
		requestPrivate,
		auth,
		politics,
		controller.delete.bind(controller)
	)

	return router
}
