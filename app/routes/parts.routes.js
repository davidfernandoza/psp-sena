'use strict'
const { Router } = require('express')

/*
 * Rutas de las partes:
 */

module.exports = ({
	PartsController,
	PartsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	 	const reqPrivate = PartsRequest.private.bind(PartsRequest)
		const reqParts = PartsRequest.body.bind(PartsRequest)

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
	const controller = PartsController

	/*
	 * -----------------------------------------------------------------------------------*
	 * POST:
	 */

	router.post(
		'/set-program',
		reqPrivate,
		auth,
		politics,
		reqParts,
		controller.create.bind(controller)
	)
	
	return router
}
