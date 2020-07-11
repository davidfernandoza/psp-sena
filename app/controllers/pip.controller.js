'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class PipController extends Controller {
	constructor({ PipRepository, PipDto, ResponseController }) {
		super(PipRepository, PipDto, ResponseController)
	}

	async getByProgram(req, res) {
		await super.getByAttribute({
			attribute: 'programs_id',
			value: req.params.id,
			type: 'all',
			res: res
		})
	}
}

module.exports = PipController
