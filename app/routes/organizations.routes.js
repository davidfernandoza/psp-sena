'use strict'
const { Router } = require('express')

/*
 * Rutas de los Organizations:
 */

module.exports = ({
	OrganizationsController,
	OrganizationsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqBody = OrganizationsRequest.body.bind(OrganizationsRequest)
	const reqPublic = OrganizationsRequest.public.bind(OrganizationsRequest)
	const reqPrivate = OrganizationsRequest.private.bind(OrganizationsRequest)

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
	const controller = OrganizationsController

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
		'/:id',
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
		'/:id',
		reqPrivate,
		auth,
		politics,
		controller.delete.bind(controller)
	)

	return router
}
