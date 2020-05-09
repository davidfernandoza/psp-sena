'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ReusablePartsController extends Controller {
	constructor({
		ReusablePartsRepository,
		ReusablePartsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(
			ReusablePartsRepository,
			ReusablePartsDto,
			Config,
			StringHelper,
			DoneString
		)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = ReusablePartsController
