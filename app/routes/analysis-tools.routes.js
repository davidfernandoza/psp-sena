'use strict'
const { Router } = require('express')

/*
 * Rutas de los AnalysisTools:
 */

module.exports = ({
	AnalysisToolsController,
	AnalysisToolsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = AnalysisToolsRequest.private.bind(AnalysisToolsRequest)

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
	const controller = AnalysisToolsController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/by-user/:id',
		reqPrivate,
		auth,
		politics,
		controller.getAllByUser.bind(controller)
	)

	return router
}
