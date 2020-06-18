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
