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

	router.get(
		'/by-program/:id',
		reqPrivate,
		auth,
		politics,
		controller.getAllByProgram.bind(controller)
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
		controller.update.bind(controller)
	)

	return router
}
