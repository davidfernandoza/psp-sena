'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class AlgorithmsRepository extends Repository {
	constructor({ DB, AlgorithmsDto, Config }) {
		super(DB, AlgorithmsDto, Config, 'algorithms')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = AlgorithmsRepository
