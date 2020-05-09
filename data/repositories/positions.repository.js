'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class PositionsRepository extends Repository {
	constructor({ DB, PositionsDto, Config }) {
		super(DB, PositionsDto, Config, 'positions')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = PositionsRepository
