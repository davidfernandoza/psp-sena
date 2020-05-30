'use strict'
const { Router } = require('express')

/*
 * Rutas de los ReusableParts:
 */

module.exports = ({
	ReusablePartsController,
	ReusablePartsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = ReusablePartsRequest.private.bind(ReusablePartsRequest)
	const reqPublic = ReusablePartsRequest.public.bind(ReusablePartsRequest)
	const reqtBody = ReusablePartsRequest.body.bind(ReusablePartsRequest)

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
	const controller = ReusablePartsController

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
		reqtBody,
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
		reqtBody,
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
