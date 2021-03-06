'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProjectsController extends Controller {
	#sequelize = {}
	#projectsUsersRepository = {}

	constructor({
		ProjectsUsersRepository,
		ProjectsRepository,
		ResponseController,
		ProjectsDto,
		DB
	}) {
		super(ProjectsRepository, ProjectsDto, ResponseController)
		this.#sequelize = DB.sequelize
		this.#projectsUsersRepository = ProjectsUsersRepository
	}

	// -------------------------------------------------------------------------------*
	// Get by user id
	async getAllByUser(req, res) {
		const entities = await this.entityRepository.getAllByUser(
			req.params.id,
			req.id
		)
		return await this.responseController.send({
			res,
			entity: entities,
			dto: this.entityDto,
			code: 'DON200L',
			addSubDto: null,
			typeDto: null
		})
	}

	// -------------------------------------------------------------------------------*
	// Crear Proyectos
	async create(req, res) {
		try {
			req.transaction = await this.#sequelize.transaction()
			req.addSubDto = null

			const created = await super.create(req, res)
			const dataRelation = {
				projects_id: created.id,
				users_id: req.id
			}
			await this.#projectsUsersRepository.create(
				{ data: dataRelation },
				req.addSubDto,
				req.transaction
			)

			//Respuesta exitosa
			await req.transaction.commit()
			return await this.responseController.send({
				res,
				entity: created,
				dto: this.entityDto,
				code: 'DON201',
				addSubDto: null,
				typeDto: null
			})
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
