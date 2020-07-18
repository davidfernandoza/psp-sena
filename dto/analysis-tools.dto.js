'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class AnalysisToolsDto extends Dto {
	constructor() {
		const schema = {
			program_name: 'program_name',
			size: 'size',
			defects: 'defects',
			time: 'time',
			defects_injected: 'defects_injected',
			defects_removed: 'defects_removed'
		}
		super(schema)
	}
}

module.exports = AnalysisToolsDto
