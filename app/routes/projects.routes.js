'use strict'
const { Router } = require('express')

/*
 * Rutas de los Projects:
 */

module.exports = ({
	ProjectsController,
	ProjectsRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPrivate = ProjectsRequest.private.bind(ProjectsRequest)
	// const requestPublic = ProjectsRequest.public.bind(ProjectsRequest)
	const requestBody = ProjectsRequest.body.bind(ProjectsRequest)
	const requestOwner = ProjectsRequest.owner.bind(ProjectsRequest)

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
	const controller = ProjectsController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/by-user/:id',
		requestPrivate,
		auth,
		politics,
		controller.getAllByUser.bind(controller)
	)

	router.get(
		'/:id',
		requestPrivate,
		auth,
		politics,
		requestOwner,
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
		requestBody,
		controller.create.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * PUT:
	 */
	router.put(
		'/:id',
		requestPrivate,
		auth,
		politics,
		requestOwner,
		requestBody,
		controller.update.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * DELETE:
	 */
	router.delete(
		'/:id',
		requestPrivate,
		auth,
		politics,
		requestOwner,
		controller.delete.bind(controller)
	)

	return router
}
