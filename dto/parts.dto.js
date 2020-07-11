'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class PartsDto extends Dto {
	constructor() {
		const schema = {
			base_parts : 'base_parts',
			reusable_parts : 'reusable_parts',
			new_parts: 'new_parts'
		}
		super(schema)
	}	
}

module.exports = PartsDto
