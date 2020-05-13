'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProjectsController extends Controller {
	#sequelize = {}
	#projectsUsersRepository = {}

	constructor({
		ProjectsUsersRepository,
		ProjectsRepository,
		StringHelper,
		ProjectsDto,
		DoneString,
		Config,
		DB
	}) {
		super(ProjectsRepository, ProjectsDto, Config, StringHelper, DoneString)
		this.#sequelize = DB.sequelize
		this.#projectsUsersRepository = ProjectsUsersRepository
	}

	// -------------------------------------------------------------------------------*
	// Get by user id
	async getAllByUser(req, res) {
		const idUser = req.id
		const idFind = req.params.id
		let entities = await this.entityRepository.getAllByUser(idFind, idUser)
		return await this.response(res, entities, 'DON200L')
	}

	// -------------------------------------------------------------------------------*
	// Crear Proyectos
	async create(req, res) {
		try {
			req.transaction = await this.#sequelize.transaction()
			const created = await super.create(req, res)
			const dataRelation = {
				projects_id: created.id,
				users_id: req.id
			}
			await this.#projectsUsersRepository.create(dataRelation, req.transaction)
			await req.transaction.commit()
			await super.response(res, created, 'DON201')
		} catch (error) {
			await req.transaction.rollback()

			// Validar si el error viene de la base de datos
			let validateDB = true
			try {
				JSON.stringify(JSON.parse(error.message))
			} catch (error) {
				validateDB = false
			}

			if (validateDB) {
				throw new Error(JSON.stringify(JSON.parse(error.message)))
			} else {
				throw new Error(error)
			}
		}
	}
}

module.exports = ProjectsController
