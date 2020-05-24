'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { morphism } = require('morphism')
const { Op } = require('sequelize')

class EstimatesRepository extends Repository {
	constructor({ DB, EstimatesDto, Config }) {
		super(DB, EstimatesDto, Config, 'estimates')
		this.db = DB
	}

	async getAllByLanguage(idLanguage, idOrganization) {
		try {
			const dto = await this.entityDto.repository()
			const entities = await this.db[this.entity].findAll({
				where: {
					[Op.and]: [
						{ languages_id: idLanguage },
						{ organizations_id: idOrganization }
					]
				}
			})
			if (entities.length === 0) return null
			return entities.map(item => morphism(dto, item))
		} catch (error) {
			return await this.errorHandle(error)
		}
	}

	async findOrganization(idOrganizations, idLanguages, algorithm) {
		try {
			const dto = await this.entityDto.repository()
			const entities = await this.db[this.entity].findAll({
				where: {
					[Op.and]: [
						{ algorithm: algorithm },
						{ languages_id: idLanguages },
						{ organizations_id: idOrganizations }
					]
				}
			})
			if (entities.length === 0) return null
			return entities.map(item => morphism(dto, item))
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async getValidate(id, idOrganizations) {
		try {
			const entity = await this.db[this.entity].findOne({
				where: {
					[Op.and]: [{ id }, { organizations_id: idOrganizations }]
				}
			})
			if (!entity) return null
			return entity
		} catch (error) {
			await this.errorHandle(error)
		}
	}
}
module.exports = EstimatesRepository
