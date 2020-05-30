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
	const reqPrivate = BasePartsRequest.private.bind(BasePartsRequest)
	const reqPublic = BasePartsRequest.public.bind(BasePartsRequest)
	const reqBody = BasePartsRequest.body.bind(BasePartsRequest)

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
