'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class ProjectsRequest extends Request {
	#projectsUsersRepository = {}
	constructor({ JoiValidator, Config, JWTService, ProjectsUsersRepository }) {
		const body = {
			name: JoiValidator.string().min(8).max(225).required(),
			description: JoiValidator.string().min(8).allow('').optional(),
			planning_date: JoiValidator.date().required(),
			start_date: JoiValidator.date().required(),
			finish_date: JoiValidator.date().required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
		this.#projectsUsersRepository = ProjectsUsersRepository
	}

	async owner(req, res, next) {
		const idProject = req.params.id
		const idUser = req.id
		const relationData = await this.#projectsUsersRepository.owner(
			idProject,
			idUser
		)
		if (!relationData) throw new Error('ERR403')
		next()
	}
}
module.exports = ProjectsRequest
