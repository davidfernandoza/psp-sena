'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class PipController extends Controller {
	constructor({ PipRepository, PipDto, Config, StringHelper, DoneString }) {
		super(PipRepository, PipDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = PipController
