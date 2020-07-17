'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class NewPartsRequest extends Request {
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
				.allow(null)
				.optional(),
			types_sizes_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			name: JoiValidator.string().min(1).max(225).required(),
			planned_lines: JoiValidator.number().min(0).max(99999999990).required(),
			number_methods_planned: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			current_lines: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			number_methods_current: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = NewPartsRequest
