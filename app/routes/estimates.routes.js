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
	const requestOrganization = EstimatesRequest.findOrganization.bind(
		EstimatesRequest
	)
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
		'/by-language/:id',
		requestPrivate,
		auth,
		politics,
		controller.getAllByLanguage.bind(controller)
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
		requestOrganization,
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
		requestOrganization,
		controller.update.bind(controller)
	)

	return router
}
