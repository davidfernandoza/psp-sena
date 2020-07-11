'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class EstimatesController extends Controller {
	constructor({ EstimatesRepository, EstimatesDto, ResponseController }) {
		super(EstimatesRepository, EstimatesDto, ResponseController)
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
		await this.responseController.send({
			res, 
			entity: entities,
			dto: this.entityDto, 
			code: 'DON200L',
			addSubDto: null,
			typeDto: null
		})
	}
}

module.exports = EstimatesController
