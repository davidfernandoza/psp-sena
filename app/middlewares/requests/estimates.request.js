'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class EstimatesRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow('', null)
				.optional(),
			languages_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			algorithms_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			code_lines: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = EstimatesRequest
