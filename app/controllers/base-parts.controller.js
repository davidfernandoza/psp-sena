'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class BasePartsController extends Controller {
	constructor({
		BasePartsRepository,
		BasePartsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(BasePartsRepository, BasePartsDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = BasePartsController
