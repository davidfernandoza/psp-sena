'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ModulesController extends Controller {
	constructor({
		ModulesRepository,
		ModulesDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(ModulesRepository, ModulesDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = ModulesController
