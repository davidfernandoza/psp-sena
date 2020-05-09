'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class TimeLogDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			programs_id: 'programs_id',
			phases_id: 'phases_id',
			start_date: 'start_date',
			delta_time: 'delta_time',
			pause_date: 'pause_date',
			interruption: 'interruption',
			comments: 'comments'
		}
		super(schema)
	}
}

module.exports = TimeLogDto
