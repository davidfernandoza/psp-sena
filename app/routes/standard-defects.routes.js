'use strict'
const { Router } = require('express')

/*
 * Rutas de los StandardDefects:
 */

module.exports = ({
	StandardDefectsController,
	StandardDefectsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPrivate = StandardDefectsRequest.private.bind(
		StandardDefectsRequest
	)

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
	const controller = StandardDefectsController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/',
		requestPrivate,
		auth,
		politics,
		controller.getAll.bind(controller)
	)

	return router
}
