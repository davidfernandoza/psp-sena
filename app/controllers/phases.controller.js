'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class PhasesController extends Controller {
	constructor({
		PhasesRepository,
		PhasesDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(PhasesRepository, PhasesDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = PhasesController
