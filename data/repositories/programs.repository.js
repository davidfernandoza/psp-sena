'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class ProgramsRepository extends Repository {
	constructor({ DB, ProgramsDto, Config }) {
		super(DB, ProgramsDto, Config, 'programs')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = ProgramsRepository
