'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class OrganizationsController extends Controller {
	constructor({
		OrganizationsRepository,
		OrganizationsDto,
		ResponseController
	}) {
		super(OrganizationsRepository, OrganizationsDto, ResponseController)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = OrganizationsController
