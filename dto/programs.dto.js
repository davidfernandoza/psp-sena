'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class ProgramsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			users_id: 'users_id',
			languages_id: 'languages_id',
			modules_id: 'modules_id',
			name: 'name',
			description: 'description',
			total_lines: 'total_lines',
			planning_date: 'planning_date',
			start_date: 'start_date',
			update_date: 'update_date',
			delivery_date: 'delivery_date'
		}
		super(schema)
	}
}

module.exports = ProgramsDto
