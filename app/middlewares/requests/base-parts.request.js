'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class BasePartsRequest extends Request {
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
			programs_base_id: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.required(),
			planned_lines_base: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.required(),
			planned_lines_deleted: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.required(),
			planned_lines_edits: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.required(),
			planned_lines_added: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.required(),
			current_lines_base: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			current_lines_deleted: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			current_lines_edits: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			current_lines_added: JoiValidator.number()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = BasePartsRequest
