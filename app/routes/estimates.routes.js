'use strict'
const { Router } = require('express')

/*
 * Rutas de los Estimates:
 */

module.exports = ({
	EstimatesController,
	EstimatesRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPrivate = EstimatesRequest.private.bind(EstimatesRequest)
	const requestPublic = EstimatesRequest.public.bind(EstimatesRequest)
	const requestBody = EstimatesRequest.body.bind(EstimatesRequest)

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
	const controller = EstimatesController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/',
		requestPublic,
		auth,
		politics,
		requestBody,
		controller.getAll.bind(controller)
	)

	router.get(
		'/:id',
		requestPrivate,
		auth,
		politics,
		requestBody,
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
		requestBody,
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
		requestBody,
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
