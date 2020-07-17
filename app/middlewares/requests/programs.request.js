'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class ProgramsRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			users_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			languages_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			modules_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			name: JoiValidator.string().min(1).max(225).required(),
			description: JoiValidator.string().min(1).required(),
			total_lines: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			planning_date: JoiValidator.date().timestamp().required(),
			start_date: JoiValidator.date().timestamp().required(),
			delivery_date: JoiValidator.date().timestamp().allow(null).optional()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = ProgramsRequest
