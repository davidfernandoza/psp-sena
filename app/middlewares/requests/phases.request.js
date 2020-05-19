'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class PhasesRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
				.allow('', null)
				.optional(),
			name: JoiValidator.any()
				.valid('PLAN', 'DLD', 'CODE', 'COMPILE', 'UT', 'PM')
				.required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = PhasesRequest
