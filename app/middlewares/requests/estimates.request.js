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
				.allow('', null)
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
				.allow('', null)
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

	// -----------------------------------------------------------------------
	// Validacion de existencia de estimacion para una organizacion
	async findOrganization(req, res, next) {
		const idOrganizations = req.organization
		let estimates = await this.#estimatesRepository.findOrganization(
			idOrganizations,
			req.body.languages_id,
			req.body.algorithm
		)

		if (estimates) {
			if (req.method == 'PUT') {
				if (estimates.length > 1)
					return super.errorHandle(null, this.#errorString.REQ400EST)

				// Validacion de pertenencia de la organizacion
				estimates = await this.#estimatesRepository.getValidate(
					req.params.id,
					idOrganizations
				)
				if (!estimates) throw new Error('ERR403')
			}
		}
		next()
	}
}
module.exports = EstimatesRequest
