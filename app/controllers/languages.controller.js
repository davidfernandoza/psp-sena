'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class LanguagesController extends Controller {
	constructor({ LanguagesRepository, LanguagesDto, ResponseController }) {
		super(LanguagesRepository, LanguagesDto, ResponseController)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = LanguagesController
