'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class TestReportsRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			programs_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			test_number: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			test_name: JoiValidator.string().min(1).max(225).required(),
			conditions: JoiValidator.string().min(1).required(),
			expected_result: JoiValidator.string().min(1).required(),
			current_result: JoiValidator.string().min(1).allow(null).optional(),
			description: JoiValidator.string().min(1).allow(null).optional(),
			objective: JoiValidator.string().min(1).required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = TestReportsRequest
