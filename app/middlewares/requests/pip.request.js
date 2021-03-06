'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class PipRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow('', null)
				.optional(),
			programs_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			description: JoiValidator.string().min(1).required(),
			proposals: JoiValidator.string().min(1).required(),
			comments: JoiValidator.string().min(1).allow(null).optional(),
			date: JoiValidator.date().timestamp().required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = PipRequest
