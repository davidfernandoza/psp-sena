'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class EstimatesNewPartsController extends Controller {
	constructor({
		EstimatesNewPartsRepository,
		EstimatesNewPartsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(
			EstimatesNewPartsRepository,
			EstimatesNewPartsDto,
			Config,
			StringHelper,
			DoneString
		)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = EstimatesNewPartsController
