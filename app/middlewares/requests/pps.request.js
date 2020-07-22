'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class PPSRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		super({}, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = PPSRequest
