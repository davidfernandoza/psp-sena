'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class TimeLogController extends Controller {
	constructor({
		TimeLogRepository,
		TimeLogDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(TimeLogRepository, TimeLogDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = TimeLogController
