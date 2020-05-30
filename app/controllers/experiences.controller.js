'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ExperiencesController extends Controller {
	constructor({ ExperiencesRepository, ExperiencesDto, Config, DoneString }) {
		super(ExperiencesRepository, ExperiencesDto, Config, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = ExperiencesController
