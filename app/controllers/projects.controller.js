'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProjectsController extends Controller {
	constructor({
		ProjectsRepository,
		ProjectsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(ProjectsRepository, ProjectsDto, Config, StringHelper, DoneString)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = ProjectsController
