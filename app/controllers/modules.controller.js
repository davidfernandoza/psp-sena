'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ModulesController extends Controller {
	constructor({
		ModulesRepository,
		ModulesDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(ModulesRepository, ModulesDto, Config, StringHelper, DoneString)
	}
	async getAllByProject(req, res) {
		const { id: idProject } = req.params
		let entities = await this.entityRepository.getAllByProject(idProject)
		return await this.response(res, entities, 'DON200L')
	}
}

module.exports = ModulesController
