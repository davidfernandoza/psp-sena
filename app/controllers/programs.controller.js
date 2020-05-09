'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProgramsController extends Controller {
	constructor({
		ProgramsRepository,
		ProgramsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(ProgramsRepository, ProgramsDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = ProgramsController
