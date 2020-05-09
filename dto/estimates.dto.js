'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class EstimatesDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			languages_id: 'languages_id',
			algorithms_id: 'algorithms_id',
			code_lines: 'code_lines'
		}
		super(schema)
	}
}

module.exports = EstimatesDto
