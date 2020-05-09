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
	// Logica diferente al CRUD base aqui:
}

module.exports = DefectLogController
