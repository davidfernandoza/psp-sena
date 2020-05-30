'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class NewPartsController extends Controller {
	constructor({ NewPartsRepository, NewPartsDto, Config, DoneString }) {
		super(NewPartsRepository, NewPartsDto, Config, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = NewPartsController
