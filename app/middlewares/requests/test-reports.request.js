'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class TestReportsRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
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
			test_name: JoiValidator.string().min(8).max(225).required(),
			conditions: JoiValidator.string().min(8).required(),
			expected_result: JoiValidator.string().min(8).required(),
			current_result: JoiValidator.string().min(8).required(),
			description: JoiValidator.string().min(8).allow('').optional(),
			objective: JoiValidator.string().min(8).required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = TestReportsRequest
