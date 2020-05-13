'use strict'
const { Router } = require('express')

/*
 * Rutas de los ForgotPassword:
 */

module.exports = ({ ForgotPasswordController, ForgotPasswordRequest }) => {
	const router = Router()

	/*
	 * Request:
	 */
	const requestPublic = ForgotPasswordRequest.public.bind(ForgotPasswordRequest)
	const requestPhone = ForgotPasswordRequest.phone.bind(ForgotPasswordRequest)
	const requestBody = ForgotPasswordRequest.body.bind(ForgotPasswordRequest)

	/*
	 * Controller:
	 */
	const controller = ForgotPasswordController

	/*
	 * -----------------------------------------------------------------------------------*
	 * POST:
	 */

	router.post(
		'/email',
		requestPublic,
		requestBody,
		controller.create.bind(controller)
	)
	router.post(
		'/phone',
		requestPublic,
		requestPhone,
		controller.create.bind(controller)
	)

	return router
}
