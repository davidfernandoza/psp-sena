'use strict'
const { Router } = require('express')

/*
 * Rutas de los Projects:
 */

module.exports = ({
	ProjectsController,
	ProjectsRequest,
	OwnersRequests,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPrivate = ProjectsRequest.private.bind(ProjectsRequest)
	const reqBody = ProjectsRequest.body.bind(ProjectsRequest)
	const projectOwner = OwnersRequests.byProject.bind(OwnersRequests)
	const usersOwner = OwnersRequests.byUser.bind(OwnersRequests)

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
		reqPrivate,
		auth,
		politics,
		usersOwner,
		controller.getAllByUser.bind(controller)
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
		projectOwner,
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
		projectOwner,
		controller.delete.bind(controller)
	)

	return router
}
