'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class AlgorithmsController extends Controller {
	constructor({
		AlgorithmsRepository,
		AlgorithmsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(AlgorithmsRepository, AlgorithmsDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = AlgorithmsController
