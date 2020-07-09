'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ExperiencesController extends Controller {
	constructor({ ExperiencesRepository, ExperiencesDto, Config, DoneString }) {
		super(ExperiencesRepository, ExperiencesDto, Config, DoneString)
	}
	// --------------------------------------------------------------------------
	async getAllByUser(req, res) {
		await super.getByAttribute({
			attribute: 'users_id',
			value: req.params.id,
			type: 'all',
			res: res
		})
	}
}

module.exports = ExperiencesController
