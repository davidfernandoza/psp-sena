'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class EstimatesRequest extends Request {
	#estimatesRepository = {}
	#errorString = {}

	constructor({
		JoiValidator,
		Config,
		JWTService,
		EstimatesRepository,
		ErrorString
	}) {
		const body = {
			id: JoiValidator.number()
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
			organizations_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			algorithm: JoiValidator.string().min(1).max(225).required(),
			code_lines: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
		this.#estimatesRepository = EstimatesRepository
		this.#errorString = ErrorString
	}


}
module.exports = EstimatesRequest
