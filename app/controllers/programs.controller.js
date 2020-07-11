'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class ProgramsController extends Controller {
	#data = {}

	constructor({
		ProgramsRepository,
		ProgramsDto,
		ResponseController
	}) {
		super(ProgramsRepository, ProgramsDto, ResponseController)
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
}

module.exports = ProgramsController
