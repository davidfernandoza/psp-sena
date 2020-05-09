'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ExperiencesLanguagesController extends Controller {
	constructor({
		ExperiencesLanguagesRepository,
		ExperiencesLanguagesDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(
			ExperiencesLanguagesRepository,
			ExperiencesLanguagesDto,
			Config,
			StringHelper,
			DoneString
		)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = ExperiencesLanguagesController
