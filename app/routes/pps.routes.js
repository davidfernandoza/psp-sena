'use strict'
const { Router } = require('express')

/*
 * Rutas de los PPS:
 */

module.exports = ({
	PPSController,
	PPSRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = PPSRequest.private.bind(PPSRequest)

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
	const controller = PPSController

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

	return router
}
