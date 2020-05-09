'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class ReusablePartsRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			programs_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			programs_reusables_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			planned_lines: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			current_lines: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = ReusablePartsRequest
