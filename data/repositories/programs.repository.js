'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { Op } = require('sequelize')
// morphism(dto, entity)

class ProgramsRepository extends Repository {
	#queriesString = {}

	constructor({ DB, ProgramsDto, Config, QueriesString }) {
		super(DB, ProgramsDto, Config, 'programs')
		this.db = DB
		this.#queriesString = QueriesString.ProgramsRepository
	}

	async getAllByModulesFromDev(idUser, idModules, transaction) {
		return await super.getAll({
			query: {
				where: { [Op.and]: [{ users_id: idUser }, { modules_id: idModules }] }
			},
			transaction
		})
	}

	async getAllByOrganization(idOrganization) {
		return await super.getBySql({
			query: this.#queriesString.getAllByOrganization,
			replace: { idOrganization: idOrganization },
			type: 'all'
		})
	}
}
module.exports = ProgramsRepository
