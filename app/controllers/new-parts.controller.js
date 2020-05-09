'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class NewPartsController extends Controller {
	constructor({
		NewPartsRepository,
		NewPartsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(NewPartsRepository, NewPartsDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = NewPartsController
