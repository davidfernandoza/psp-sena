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
				.required(),
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
				.required(),
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
				.required(),
			types_sizes_id: JoiValidator.number().integer().min(1).max(30).required(),
			name: JoiValidator.string().min(8).max(225).required(),
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
				.required(),
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
			name: JoiValidator.string().min(8).max(225).required(),
			description: JoiValidator.string().min(8).required(),
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
			base_parts: JoiValidator.array().ordered(baseParts),
			reusable_parts: JoiValidator.array().ordered(reusableParts),
			new_parts: JoiValidator.array().ordered(newParts)
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = ProgramsRequest
