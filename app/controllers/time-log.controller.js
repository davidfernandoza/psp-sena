'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class TimeLogController extends Controller {
	constructor({ TimeLogRepository, TimeLogDto, Config, DoneString }) {
		super(TimeLogRepository, TimeLogDto, Config, DoneString)
	}

	async getAllByProgram(req, res) {
		await super.getByAttribute({
			attribute: 'programs_id',
			value: req.params.id,
			type: 'all',
			res: res
		})
	}
}

module.exports = TimeLogController
