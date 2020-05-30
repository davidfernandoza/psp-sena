'use strict'
const { Router } = require('express')

/*
 * Rutas de los NewParts:
 */

module.exports = ({
	NewPartsController,
	NewPartsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = NewPartsRequest.private.bind(NewPartsRequest)
	const reqPublic = NewPartsRequest.public.bind(NewPartsRequest)
	const reqBody = NewPartsRequest.body.bind(NewPartsRequest)

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
	const controller = NewPartsController

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
