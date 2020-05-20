'use strict'

const { Router } = require('express')

module.exports = ({
	ForgotPasswordController,
	AuthMiddleware,
	AuthRequest,
	TokenAuth,
	UsersAuth
}) => {
	/*
	 * Request:
	 */
	const requestPublic = AuthRequest.public.bind(AuthRequest)
	const requestPrivate = AuthRequest.private.bind(AuthRequest)
	const requestBody = AuthRequest.body.bind(AuthRequest)

	/*
	 * Middlewares:
	 */
	const auth = AuthMiddleware.compare.bind(AuthMiddleware)

	/*
	 * Controllers:
	 */
	const forgotPassword = ForgotPasswordController
	const user = UsersAuth
	const token = TokenAuth
	const router = Router()

	router.post('/login', requestPublic, requestBody, user.login.bind(user))
	router.post('/logout', requestPrivate, auth, token.delete.bind(token))
	router.post('/new-token', requestPrivate, auth, token.create.bind(token))
	router.post(
		'/forgot-password',
		requestPublic,
		requestBody,
		forgotPassword.create.bind(forgotPassword)
	)

	return router
}
