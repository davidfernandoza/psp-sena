'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class DefectLogRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
				.allow('', null)
				.optional(),
			defect_log_chained_id: JoiValidator.number()
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
			standard_defects_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow('', null)
				.optional(),
			phase_added_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			phase_removed_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			description: JoiValidator.string().min(8).required(),
			solution: JoiValidator.string().min(8).allow('', null).optional(),
			start_date: JoiValidator.date().timestamp().required(),
			finish_date: JoiValidator.date().timestamp().required(),
			time_for_repair: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow('', null)
				.optional()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = DefectLogRequest
