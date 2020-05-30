'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProgramsController extends Controller {
	constructor({ ProgramsRepository, ProgramsDto, Config, DoneString }) {
		super(ProgramsRepository, ProgramsDto, Config, DoneString)
	}

	async getAllByModule(req, res) {
		await super.getByAttribute({
			attribute: 'modules_id',
			value: req.params.id,
			type: 'all',
			res: res
		})
	}
}

module.exports = ProgramsController
