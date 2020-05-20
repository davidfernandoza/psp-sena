'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class ProjectsRequest extends Request {
	#projectsUsersRepository = {}
	constructor({ JoiValidator, Config, JWTService, ProjectsUsersRepository }) {
		const body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow('', null)
				.optional(),
			name: JoiValidator.string().min(1).max(225).required(),
			description: JoiValidator.string().min(1).required(),
			planning_date: JoiValidator.date().timestamp().required(),
			start_date: JoiValidator.date().timestamp().allow('', null).optional(),
			finish_date: JoiValidator.date().timestamp().allow('', null).optional()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
		this.#projectsUsersRepository = ProjectsUsersRepository
	}

	//------------------------------------------------------------------------------

	async owner(req, res, next) {
		let idProject = req.params.id

		if (
			req.method != 'GET' &&
			(req.baseUrl == '/api/modules' || req.baseUrl == '/api/users')
		)
			idProject = req.body.projects_id

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
