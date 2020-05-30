'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class LanguagesController extends Controller {
	constructor({ LanguagesRepository, LanguagesDto, Config, DoneString }) {
		super(LanguagesRepository, LanguagesDto, Config, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = LanguagesController
