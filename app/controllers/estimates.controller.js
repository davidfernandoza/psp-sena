'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class EstimatesController extends Controller {
	constructor({
		EstimatesRepository,
		EstimatesDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(EstimatesRepository, EstimatesDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = EstimatesController
