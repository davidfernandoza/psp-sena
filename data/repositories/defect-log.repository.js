'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class DefectLogRepository extends Repository {
	constructor({ DB, DefectLogDto, Config }) {
		super(DB, DefectLogDto, Config, 'defect_logs')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = DefectLogRepository
