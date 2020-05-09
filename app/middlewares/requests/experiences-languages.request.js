'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class ExperiencesLanguagesRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			experiences_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			languages_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = ExperiencesLanguagesRequest
