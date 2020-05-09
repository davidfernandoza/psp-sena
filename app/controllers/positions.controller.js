'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class PositionsController extends Controller {
	constructor({
		PositionsRepository,
		PositionsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(PositionsRepository, PositionsDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = PositionsController
