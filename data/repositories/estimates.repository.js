'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class EstimatesRepository extends Repository {
	constructor({ DB, EstimatesDto, Config }) {
		super(DB, EstimatesDto, Config, 'estimates')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = EstimatesRepository
