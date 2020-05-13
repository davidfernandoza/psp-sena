'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { morphism } = require('morphism')
// morphism(dto, entity)

class ProgramsRepository extends Repository {
	constructor({ DB, ProgramsDto, Config }) {
		super(DB, ProgramsDto, Config, 'programs')
		this.db = DB
	}

	async getAll(id) {
		try {
			const dto = await this.entityDto.repository()
			const entities = await this.db[this.entity].findAll({
				where: { id }
			})
			if (entities.length === 0) return null
			return entities.map(item => morphism(dto, item))
		} catch (error) {
			return await this.errorHandle(error)
		}
	}
}
module.exports = ProgramsRepository
