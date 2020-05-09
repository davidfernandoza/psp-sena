'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class DefectLogRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		const body = {
			defect_log_chained_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			programs_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			standard_defects_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
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
			description: JoiValidator.string().min(8).allow('').optional(),
			solution: JoiValidator.string().min(8).allow('').optional(),
			start_date: JoiValidator.date().timestamp().required(),
			time_for_repair: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}
}
module.exports = DefectLogRequest
