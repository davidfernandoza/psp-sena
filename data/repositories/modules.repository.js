'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { morphism } = require('morphism')

class ModulesRepository extends Repository {
	constructor({ DB, ModulesDto, Config }) {
		super(DB, ModulesDto, Config, 'modules')
		this.db = DB
	}

	async getAllByProject(idProject) {
		try {
			const dto = await this.entityDto.repository()
			const entities = await this.db[this.entity].findAll({
				include: [
					{
						model: this.db.projects,
						as: 'projects',
						where: { id: idProject },
						required: true
					}
				]
			})
			if (entities.length === 0) return null
			return entities.map(item => morphism(dto, item))
		} catch (error) {
			return await this.errorHandle(error)
		}
	}
}
module.exports = ModulesRepository
