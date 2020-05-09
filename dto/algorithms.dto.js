'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class AlgorithmsDto extends Dto {
	constructor() {
		const schema = { id: 'id', name: 'name' }
		super(schema)
	}
}

module.exports = AlgorithmsDto
