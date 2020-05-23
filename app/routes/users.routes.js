'use strict'
const { Router } = require('express')

/*
 * Rutas de los Users:
 */

module.exports = ({
	ProjectsUsersController,
	ProjectsRequest,
	UsersController,
	UsersRequest,
	AuthMiddleware,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request (Validadores):
	 */
	const requestPrivate = UsersRequest.private.bind(UsersRequest)
	const requestPassword = UsersRequest.password.bind(UsersRequest)
	const requestUpdate = UsersRequest.update.bind(UsersRequest)
	const requestBody = UsersRequest.body.bind(UsersRequest)
	const requestProjects = UsersRequest.project.bind(UsersRequest)
	const requestOrganization = UsersRequest.organization.bind(UsersRequest)
	const requestProjectOwner = ProjectsRequest.owner.bind(ProjectsRequest)

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
	const controller = UsersController
	const relationController = ProjectsUsersController

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

	router.get(
		'/free',
		requestPrivate,
		auth,
		politics,
		controller.getAll.bind(controller)
	)

	router.get(
		'/by-projects/:id',
		requestPrivate,
		auth,
		politics,
		requestProjectOwner,
		controller.getAllByProject.bind(controller)
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

	router.post(
		'/add-projects',
		requestPrivate,
		auth,
		politics,
		requestProjects,
		requestProjectOwner,
		requestOrganization,
		relationController.create.bind(relationController)
	)

	router.post(
		'/remove-projects',
		requestPrivate,
		auth,
		politics,
		requestProjects,
		requestProjectOwner,
		requestOrganization,
		relationController.delete.bind(relationController)
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
		requestOrganization,
		requestUpdate,
		controller.update.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * PATCH:
	 */
	router.patch(
		'/password',
		requestPrivate,
		auth,
		politics,
		requestPassword,
		controller.password.bind(controller)
	)

	return router
}
