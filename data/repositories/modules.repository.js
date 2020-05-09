'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class ModulesRepository extends Repository {
	constructor({ DB, ModulesDto, Config }) {
		super(DB, ModulesDto, Config, 'modules')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = ModulesRepository
