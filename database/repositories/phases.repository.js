'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class PhasesRepository extends Repository {
	constructor({ DB, PhasesDto, Config }) {
		super(DB, PhasesDto, Config, 'phases')
		this.db = DB
	}
	//  ----------------------------------------------------------------------
	async getPhasesCount() {
		return await this.db[this.entity].count()
	}
}
module.exports = PhasesRepository
