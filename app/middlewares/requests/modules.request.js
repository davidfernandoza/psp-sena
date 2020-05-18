'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class ModulesRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			projects_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			name: JoiValidator.string().min(8).max(225).required(),
			description: JoiValidator.string().min(8).allow('').optional(),
			planning_date: JoiValidator.date().timestamp().required(),
			start_date: JoiValidator.date().timestamp().required(),
			finish_date: JoiValidator.date().timestamp().required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = ModulesRequest
