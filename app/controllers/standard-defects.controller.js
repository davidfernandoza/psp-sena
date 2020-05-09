'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class StandardDefectsController extends Controller {
	constructor({
		StandardDefectsRepository,
		StandardDefectsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(
			StandardDefectsRepository,
			StandardDefectsDto,
			Config,
			StringHelper,
			DoneString
		)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = StandardDefectsController
