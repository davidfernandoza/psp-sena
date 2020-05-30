'use strict'
const { Router } = require('express')

/*
 * Rutas de los Estimates:
 */

module.exports = ({
	EstimatesController,
	EstimatesRequest,
	AuthMiddleware,
	OwnersRequests,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = EstimatesRequest.private.bind(EstimatesRequest)
	const reqBody = EstimatesRequest.body.bind(EstimatesRequest)
	const etimateExist = OwnersRequests.byEstimate.bind(OwnersRequests)

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
		reqPrivate,
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
		reqPrivate,
		auth,
		politics,
		reqBody,
		etimateExist,
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
		etimateExist,
		controller.update.bind(controller)
	)

	return router
}
