'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProjectsUsersController extends Controller {
	constructor({
		ProjectsUsersRepository,
		ProjectsUsersDto,
		ResponseController
	}) {
		super(ProjectsUsersRepository, ProjectsUsersDto, ResponseController)
	}

	async delete(req, res) {
		const { projects_id: idProject, users_id: idUser } = req.body,
			deleted = await this.entityRepository.delete(idProject, idUser)
		return await this.responseController.send({
			res, 
			entity: deleted,
			dto: this.entityDto, 
			code: 'DON204',
			addSubDto: null,
			typeDto: null
		})
	}
}

module.exports = ProjectsUsersController
