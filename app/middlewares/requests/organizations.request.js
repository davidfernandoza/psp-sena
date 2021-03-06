'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class OrganizationsRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			name: JoiValidator.string().min(1).max(225).required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = OrganizationsRequest
