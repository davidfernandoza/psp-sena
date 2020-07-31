'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ModulesController extends Controller {
	#data = {}

	constructor({ ModulesRepository, ModulesDto, ResponseController }) {
		super(ModulesRepository, ModulesDto, ResponseController)
	}

	async getAllByProject(req, res) {
		this.#data = await this.entityRepository.getByInclude({
			includeEntity: 'projects',
			includeAlias: 'projects',
			includeRequired: true,
			includeWhere: { id: req.params.id },
			type: 'all'
		})
		await this.responseController.send({
			res,
			entity: this.#data,
			dto: this.entityDto,
			code: 'DON200L',
			addSubDto: null,
			typeDto: null
		})
	}
}

module.exports = ModulesController
