'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class ProjectsUsersRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			projects_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			users_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = ProjectsUsersRequest
