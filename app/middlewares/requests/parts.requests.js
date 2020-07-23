'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class PartsRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		//  ---------------------------------------------------------------------

		const planning = JoiValidator.object().keys({
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			phases_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			programs_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			planning_time: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			current_time: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			planning_defect: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			current_defect: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional()
		})
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
			planned_lines: JoiValidator.number().min(0).max(99999999990).required(),
			current_lines: JoiValidator.number()
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
		})

		//  ---------------------------------------------------------------------

		const body = {
			base_parts: JoiValidator.array().items(baseParts),
			reusable_parts: JoiValidator.array().items(reusableParts),
			new_parts: JoiValidator.array().items(newParts).required(),
			planning: JoiValidator.array().items(planning).required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = PartsRequest
