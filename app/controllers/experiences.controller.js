'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ExperiencesController extends Controller {
	constructor({ ExperiencesRepository, ExperiencesDto, ResponseController }) {
		super(ExperiencesRepository, ExperiencesDto, ResponseController)
	}
	// --------------------------------------------------------------------------
	async getAllByUser(req, res) {
		await super.getByAttribute({
			attribute: 'users_id',
			value: req.params.id,
			type: 'all',
			limit: 5,
			res: res
		})
	}

	// --------------------------------------------------------------------------
	async create(req, res) {
		req.body.users_id = req.id
		super.create(req, res)
	}

	// --------------------------------------------------------------------------
	async update(req, res) {
		req.body.users_id = req.id
		super.update(req, res)
	}
}

module.exports = ExperiencesController
