'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class DefectLogController extends Controller {
	constructor({ DefectLogRepository, DefectLogDto, ResponseController }) {
		super(DefectLogRepository, DefectLogDto, ResponseController)
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

module.exports = DefectLogController
