'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class ProjectsUsersRepository extends Repository {
	constructor({ DB, ProjectsUsersDto, Config }) {
		super(DB, ProjectsUsersDto, Config, 'projects_users')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = ProjectsUsersRepository
