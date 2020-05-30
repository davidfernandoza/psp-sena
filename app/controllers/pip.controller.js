'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class PipController extends Controller {
	constructor({ PipRepository, PipDto, Config, DoneString }) {
		super(PipRepository, PipDto, Config, DoneString)
	}

	async getByProgram(req, res) {
		await super.getByAttribute({
			attribute: 'programs_id',
			value: req.params.id,
			type: 'one',
			res: res
		})
	}
}

module.exports = PipController
