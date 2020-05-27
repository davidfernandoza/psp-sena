'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { morphism } = require('morphism')

class TimeLogRepository extends Repository {
	constructor({ DB, TimeLogDto, Config }) {
		super(DB, TimeLogDto, Config, 'time_log')
		this.db = DB
	}

	async getByProgram(idTimeLog, idUser) {
		try {
			const dto = await this.entityDto.repository()
			const entity = await this.db[this.entity].findOne({
				where: { id: idTimeLog },
				include: [
					{
						model: this.db.programs,
						as: 'programs',
						where: { users_id: idUser },
						required: true
					}
				]
			})
			if (!entity) return null
			return morphism(dto, entity)
		} catch (error) {
			await this.errorHandle(error)
		}
	}
}
module.exports = TimeLogRepository
