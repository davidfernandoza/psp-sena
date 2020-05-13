'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProgramsController extends Controller {
	constructor({
		ProgramsRepository,
		ProgramsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(ProgramsRepository, ProgramsDto, Config, StringHelper, DoneString)
	}

	// Get by id
	async getAll(req, res) {
		const { id } = req.params
		let entities = await this.entityRepository.getAll(id)
		return await this.response(res, entities, 'DON200L')
	}
}

module.exports = ProgramsController
