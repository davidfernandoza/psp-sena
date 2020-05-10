'use strict'

const { Router } = require('express')

module.exports = ({
	AuthRequest,
	AuthMiddleware,
	ForgotPasswordController,
	TokenAuth,
	UsersAuth
}) => {
	/*
	 * Rutas de las autentificaciones:
	 * -------------------------
	 * Middlewares:
	 */
	const auth = AuthMiddleware.compare.bind(AuthMiddleware)

	const requestPublic = AuthRequest.public.bind(AuthRequest)
	const requestLogout = AuthRequest.logout.bind(AuthRequest)
	const user = UsersAuth
	const forgotPassword = ForgotPasswordController
	const token = TokenAuth
	const router = Router()
	router.post('/login', requestPublic, user.login.bind(user))
	router.post('/logout', requestLogout, auth, token.delete.bind(token))
	router.post(
		'/forgot-password',
		requestPublic,
		forgotPassword.create.bind(forgotPassword)
	)

	return router
}
