'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class ProjectsRepository extends Repository {
	constructor({ DB, ProjectsDto, Config }) {
		super(DB, ProjectsDto, Config, 'projects')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = ProjectsRepository
