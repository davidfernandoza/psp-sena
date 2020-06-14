'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class ProgramsRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		//  ---------------------------------------------------------------------

		const reusableParts = JoiValidator.object().keys({
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
			programs_reusables_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			planned_lines: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			current_lines: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional()
		})

		//  ---------------------------------------------------------------------

		const baseParts = JoiValidator.object().keys({
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
			programs_base_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			planned_lines_base: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			planned_lines_deleted: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			planned_lines_edits: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			planned_lines_added: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			current_lines_base: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			current_lines_deleted: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			current_lines_edits: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			current_lines_added: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional()
		})

		//  ---------------------------------------------------------------------

		const newParts = JoiValidator.object().keys({
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
			types_sizes_id: JoiValidator.number().integer().min(1).max(30).required(),
			name: JoiValidator.string().min(1).max(225).required(),
			planned_lines: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			number_methods_planned: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			current_lines: JoiValidator.number()
				.integer()
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
		})

		//  ---------------------------------------------------------------------

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
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			planning_date: JoiValidator.date().timestamp().required(),
			start_date: JoiValidator.date().timestamp().required(),
			update_date: JoiValidator.date().timestamp().allow(null).optional(),
			delivery_date: JoiValidator.date().timestamp().allow(null).optional(),
			base_parts: JoiValidator.array().items(baseParts),
			reusable_parts: JoiValidator.array().items(reusableParts),
			new_parts: JoiValidator.array().items(newParts)
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = ProgramsRequest
