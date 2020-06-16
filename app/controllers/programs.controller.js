'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProgramsController extends Controller {
	#sequelize = {}
	#basePartsController = {}
	#newPartsController = {}
	#reusablePartsController = {}
	#data = {}

	constructor({
		ReusablePartsController,
		BasePartsController,
		ProgramsRepository,
		NewPartsController,
		ProgramsDto,
		DoneString,
		Config,
		DB
	}) {
		super(ProgramsRepository, ProgramsDto, Config, DoneString)
		this.#sequelize = DB.sequelize
		this.#basePartsController = BasePartsController
		this.#newPartsController = NewPartsController
		this.#reusablePartsController = ReusablePartsController
	}

	// -------------------------------------------------------------------------+

	async getAllByModule(req, res) {
		const { id: idModules } = req.params,
			idUser = req.id

		if (req.rol == 'DEV') {
			this.#data = await this.entityRepository.getAllByModulesFromDev(
				idUser,
				idModules
			)
		} else {
			this.#data = await super.getByAttribute({
				attribute: 'modules_id',
				value: idModules,
				type: 'all',
				return: true,
				res: res
			})
		}
		return await super.response(res, this.#data, 'DON200L')
	}

	// -------------------------------------------------------------------------+

	async getAllByOrganization(req, res) {
		const { organization: idOrganization } = req
		const program = await this.entityRepository.getAllByOrganization(
			idOrganization
		)
		return await super.response(res, program, 'DON200L', null, 'byOrganization')
	}

	// -------------------------------------------------------------------------+
	// Crea un nuevo programa con las partes base, reusables y nuevas:

	async create(req, res) {
		const temp = {
				transaction: await this.#sequelize.transaction(),
				body: req.body,
				programs_id: null,
				res: {}
			},
			code = 'DON201'

		try {
			temp.body.users_id = req.id
			temp.res = await super.create(temp)
			temp.programs_id = temp.res.id

			temp.body = req.body.base_parts
			temp.res.base_parts = await this.#basePartsController.create(temp)

			temp.body = req.body.new_parts
			temp.res.new_parts = await this.#newPartsController.create(temp)

			temp.body = req.body.reusable_parts
			temp.res.reusable_parts = await this.#reusablePartsController.create(temp)

			temp.transaction.commit()
			await super.response(res, temp.res, code)
		} catch (error) {
			await temp.transaction.rollback()

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

module.exports = ProgramsController
