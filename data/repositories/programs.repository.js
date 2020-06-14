'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { Op } = require('sequelize')
// morphism(dto, entity)

class ProgramsRepository extends Repository {
	constructor({ DB, ProgramsDto, Config }) {
		super(DB, ProgramsDto, Config, 'programs')
		this.db = DB
	}

	async getAllByModulesFromDev(idUser, idModules, transaction) {
		return await super.getAll({
			query: {
				where: { [Op.and]: [{ users_id: idUser }, { modules_id: idModules }] }
			},
			transaction
		})
	}
}
module.exports = ProgramsRepository
