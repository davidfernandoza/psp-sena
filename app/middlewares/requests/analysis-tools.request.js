'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class AnalysisToolsRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = AnalysisToolsRequest
