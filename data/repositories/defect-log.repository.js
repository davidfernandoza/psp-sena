'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { morphism } = require('morphism')

class DefectLogRepository extends Repository {
	constructor({ DB, DefectLogDto, Config }) {
		super(DB, DefectLogDto, Config, 'defect_log')
		this.db = DB
	}

	async getByProgram(idDefectLog, idUser) {
		try {
			const dto = await this.entityDto.repository()
			const entity = await this.db[this.entity].findOne({
				include: [
					{
						model: this.db.programs,
						as: 'programs_2',
						where: { users_id: idUser },
						required: true
					}
				],
				where: { id: idDefectLog }
			})

			if (!entity) return null
			return morphism(dto, entity)
		} catch (error) {
			await this.errorHandle(error)
		}
	}
}
module.exports = DefectLogRepository
