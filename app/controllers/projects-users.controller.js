'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProjectsUsersController extends Controller {
	constructor({
		ProjectsUsersRepository,
		ProjectsUsersDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(
			ProjectsUsersRepository,
			ProjectsUsersDto,
			Config,
			StringHelper,
			DoneString
		)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = ProjectsUsersController
