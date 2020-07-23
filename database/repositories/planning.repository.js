'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class PlanningRepository extends Repository {
	constructor({ DB, PlanningDto, Config }) {
		super(DB, PlanningDto, Config, 'plannings')
		this.db = DB
	}
	async getTotalCurrentTime(idProgram) {
		return await this.db[this.entity].sum('current_time', {
			where: { programs_id: idProgram }
		})
	}
}
module.exports = PlanningRepository
