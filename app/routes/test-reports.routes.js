'use strict'
const { Router } = require('express')

/*
 * Rutas de los TestReports:
 */

module.exports = ({
	TestReportsController,
	TestReportsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPrivate = TestReportsRequest.private.bind(TestReportsRequest)
	const requestPublic = TestReportsRequest.public.bind(TestReportsRequest)

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
	const controller = TestReportsController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/',
		requestPublic,
		auth,
		politics,
		controller.getAll.bind(controller)
	)

	router.get(
		'/:id',
		requestPrivate,
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
		requestPrivate,
		auth,
		politics,
		controller.create.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * PUT:
	 */
	router.put(
		'/',
		requestPrivate,
		auth,
		politics,
		controller.update.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * DELETE:
	 */
	router.delete(
		'/',
		requestPrivate,
		auth,
		politics,
		controller.delete.bind(controller)
	)

	return router
}
