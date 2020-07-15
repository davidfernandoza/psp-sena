'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class PlanningTimesDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			phases_id: 'phases_id',
			programs_id: 'programs_id',
			planning_time: 'planning_time',
			current_time: 'current_time'
		}
		super(schema)
	}
}

module.exports = PlanningTimesDto
