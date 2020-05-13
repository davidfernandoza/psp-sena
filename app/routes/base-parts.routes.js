'use strict'
const { Router } = require('express')

/*
 * Rutas de los BaseParts:
 */

module.exports = ({
	BasePartsController,
	BasePartsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPrivate = BasePartsRequest.private.bind(BasePartsRequest)
	const requestPublic = BasePartsRequest.public.bind(BasePartsRequest)
	const requestBody = BasePartsRequest.body.bind(BasePartsRequest)

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
	const controller = BasePartsController

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
