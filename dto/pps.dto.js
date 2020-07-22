'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class PPSDto extends Dto {
	constructor() {
		const schema = {
			language: 'language',
			program_lines: 'program_lines',
			time_phase: 'time_phase',
			defects_injected: 'defects_injected',
			defects_removed: 'defects_removed'
		}
		super(schema)
	}
}

module.exports = PPSDto
