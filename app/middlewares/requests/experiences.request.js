'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class ExperiencesRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
				.allow('', null)
				.optional(),
			positions_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			users_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			organization: JoiValidator.string().min(8).max(225).required(),
			years_position: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			years_generals: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			years_organization: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			years_configuration: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			years_integration: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			years_requirements: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			years_design: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			years_tests: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			years_support: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = ExperiencesRequest
