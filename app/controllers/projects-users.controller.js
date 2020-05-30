'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProjectsUsersController extends Controller {
	constructor({
		ProjectsUsersRepository,
		ProjectsUsersDto,
		Config,
		DoneString
	}) {
		super(ProjectsUsersRepository, ProjectsUsersDto, Config, DoneString)
	}

	async delete(req, res) {
		const { projects_id: idProject, users_id: idUser } = req.body,
			deleted = await this.entityRepository.delete(idProject, idUser)
		await this.response(res, deleted, 'DON204', false)
	}
}

module.exports = ProjectsUsersController
