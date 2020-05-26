'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class DefectLogController extends Controller {
	constructor({
		DefectLogRepository,
		DefectLogDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(DefectLogRepository, DefectLogDto, Config, StringHelper, DoneString)
	}

	async getAllAttribute(req, res) {
		let defects = await super.getAllAttribute('programs_id', req.params.id)
		return await super.response(res, defects, 'DON200L')
	}
}

module.exports = DefectLogController
