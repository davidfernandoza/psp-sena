'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { Op } = require('sequelize')
const { morphism } = require('morphism')

class ProjectsUsersRepository extends Repository {
	constructor({ DB, ProjectsUsersDto, Config }) {
		super(DB, ProjectsUsersDto, Config, 'projects_users')
		this.db = DB
	}
	// Aqui van las consultas especializadas

	async owner(idProject, idUser) {
		try {
			const dto = await this.entityDto.repository()
			const entity = await this.db[this.entity].findOne({
				where: { [Op.and]: [{ users_id: idUser }, { projects_id: idProject }] }
			})
			if (!entity) return null
			return morphism(dto, entity)
		} catch (error) {
			return await this.errorHandle(error)
		}
	}

	async delete(idProject, idUser) {
		try {
			const result = await this.db[this.entity].destroy({
				where: { [Op.and]: [{ users_id: idUser }, { projects_id: idProject }] }
			})
			if (result == 0) return null
			return result
		} catch (error) {
			await this.errorHandle(error)
		}
	}
}
module.exports = ProjectsUsersRepository
