'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class TimeLogRequest extends Request {
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
			phases_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			start_date: JoiValidator.date().timestamp().required(),
			delta_time: JoiValidator.number().allow(null).optional(),
			finish_date: JoiValidator.date().timestamp().allow(null).optional(),
			interruption: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			comments: JoiValidator.string().min(8).allow(null).optional()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = TimeLogRequest
