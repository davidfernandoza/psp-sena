'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class PlanningTimesRepository extends Repository {
	constructor({ DB, PlanningTimesDto, Config }) {
		super(DB, PlanningTimesDto, Config, 'planning_times')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = PlanningTimesRepository
