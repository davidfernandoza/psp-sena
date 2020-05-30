'use strict'
const { Router } = require('express')

/*
 * Rutas de los EstimatesNewParts:
 */

module.exports = ({
	EstimatesNewPartsController,
	EstimatesNewPartsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = EstimatesNewPartsRequest.private.bind(
		EstimatesNewPartsRequest
	)
	const reqPublic = EstimatesNewPartsRequest.public.bind(
		EstimatesNewPartsRequest
	)
	const reqBody = EstimatesNewPartsRequest.body.bind(EstimatesNewPartsRequest)

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
	const controller = EstimatesNewPartsController

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
