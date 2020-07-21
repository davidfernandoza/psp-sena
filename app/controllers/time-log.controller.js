'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class TimeLogController extends Controller {
	constructor({ TimeLogRepository, TimeLogDto, ResponseController }) {
		super(TimeLogRepository, TimeLogDto, ResponseController)
	}

	async getAllByProgram(req, res) {
		const query = {
			attribute: 'programs_id',
			value: req.params.id,
			type: 'all',
			res: res
		}
		if (req.return) query.return = true
		return await super.getByAttribute(query)
	}
}

module.exports = TimeLogController
