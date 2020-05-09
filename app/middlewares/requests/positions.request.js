'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class PositionsRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			name: JoiValidator.string().min(8).max(225).required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = PositionsRequest
