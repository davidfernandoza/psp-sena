'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class PlanningTimesRepository extends Repository {
	constructor({ DB, PlanningTimesDto, Config }) {
		super(DB, PlanningTimesDto, Config, 'planning_times')
		this.db = DB
	}
	async getTotalCurrentTime(idProgram) {
		return await this.db[this.entity].sum('current_time', {
			where: { programs_id: idProgram }
		})
	}
}
module.exports = PlanningTimesRepository
