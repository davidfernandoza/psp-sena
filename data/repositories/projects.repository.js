'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { morphism } = require('morphism')
const { QueryTypes } = require('sequelize')

class ProjectsRepository extends Repository {
	#queriesString = {}

	constructor({ DB, ProjectsDto, Config, QueriesString }) {
		super(DB, ProjectsDto, Config, 'projects')
		this.db = DB
		this.#queriesString = QueriesString.ProjectsRepository
	}

	async getAllByUser(idFind, idUser) {
		try {
			const dto = await this.entityDto.repository()
			const entities = await this.db.sequelize.query(
				this.#queriesString.getAllByUser,
				{
					replacements: { find: idFind, user: idUser },
					type: QueryTypes.SELECT
				}
			)
			if (entities.length === 0) return null
			return entities.map(item => morphism(dto, item))
		} catch (error) {
			return await this.errorHandle(error)
		}
	}
}
module.exports = ProjectsRepository
