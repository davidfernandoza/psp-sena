'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ModulesController extends Controller {
	#data = {}

	constructor({ ModulesRepository, ModulesDto, Config, DoneString }) {
		super(ModulesRepository, ModulesDto, Config, DoneString)
	}

	async getAllByProject(req, res) {
		this.#data = await this.entityRepository.getByInclude({
			includeEntity: 'projects',
			includeAlias: 'projects',
			includeRequired: true,
			includeWhere: { id: req.params.id },
			type: 'all'
		})
		return await this.response(res, this.#data, 'DON200L')
	}
}

module.exports = ModulesController
