'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class AuthRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			identity: JoiValidator.string().min(5).max(100).required(),
			password: JoiValidator.string().min(8).max(45).required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}

	
}
module.exports = AuthRequest
