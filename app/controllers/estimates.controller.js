'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class EstimatesController extends Controller {
	constructor({ EstimatesRepository, EstimatesDto, Config, DoneString }) {
		super(EstimatesRepository, EstimatesDto, Config, DoneString)
	}

	// --------------------------------------------------------------------------
	async create(req, res) {
		req.body.organizations_id = req.organization
		return super.create(req, res)
	}

	// --------------------------------------------------------------------------
	async update(req, res) {
		req.body.organizations_id = req.organization
		return super.update(req, res)
	}

	// -------------------------------------------------------------------------------*
	async getAllByLanguage(req, res) {
		const { id: idLanguage } = req.params
		const idOrganization = req.organization
		let entities = await this.entityRepository.getAllByLanguage(
			idLanguage,
			idOrganization
		)
		return await this.response(res, entities, 'DON200L')
	}
}

module.exports = EstimatesController
