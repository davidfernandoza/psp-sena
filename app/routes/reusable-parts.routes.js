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
	const reqBody = ReusablePartsRequest.body.bind(ReusablePartsRequest)

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
