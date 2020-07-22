'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProgramsController extends Controller {
	#data = {}
	#calculateProgramController = {}
	#sequelize = {}

	constructor({
		CalculateProgramController,
		ResponseController,
		ProgramsRepository,
		ProgramsDto,
		DB
	}) {
		super(ProgramsRepository, ProgramsDto, ResponseController)
		this.#calculateProgramController = CalculateProgramController
		this.#sequelize = DB.sequelize
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
		return await this.responseController.send({
			res,
			entity: this.#data,
			dto: this.entityDto,
			code: 'DON200L',
			addSubDto: null,
			typeDto: null
		})
	}

	// -------------------------------------------------------------------------+

	async update(req, res) {
		delete req.body.delivery_date
		req.body.users_id = req.id
		await super.update(req, res)
	}

	// -------------------------------------------------------------------------+

	async getAllByOrganization(req, res) {
		const { organization: idOrganization } = req
		const program = await this.entityRepository.getAllByOrganization(
			idOrganization
		)
		return await this.responseController.send({
			res,
			entity: program,
			dto: this.entityDto,
			code: 'DON200L',
			addSubDto: null,
			typeDto: 'byOrganization'
		})
	}

	// -------------------------------------------------------------------------+

	async getAllByUser(req) {
		const { id: idUser } = req.params
		return await this.entityRepository.getAllCompleteByUser(idUser)
	}

	// --------------------------------------------------------------------------+
	async endProgram(req, res) {
		const transaction = await this.#sequelize.transaction()

		try {
			const { id: idProgram } = req.params,
				sizes = await this.#calculateProgramController.programSize(idProgram)
			if (
				await this.#calculateProgramController.phasesCurrentTime(
					idProgram,
					transaction
				)
			) {
				// Actualiza el programa con los valores de tamaño calculados
				await super.update({
					return: true,
					dto: { total_lines: 'total_lines' },
					body: { total_lines: sizes },
					params: { id: idProgram },
					transaction
				})
				transaction.commit()
				return await this.responseController.send({
					res,
					entity: {},
					dto: {},
					code: 'DON204',
					addSubDto: null,
					typeDto: null
				})
			} else {
				throw 'PRO400'
			}
		} catch (error) {
			await transaction.rollback()

			// Validar si el error viene de la base de datos
			let validateDB = true
			try {
				JSON.stringify(JSON.parse(error.message))
			} catch (error) {
				validateDB = false
			}

			if (validateDB) {
				throw Error(JSON.stringify(JSON.parse(error.message)))
			} else {
				throw Error(error)
			}
		}
	}
}

module.exports = ProgramsController
