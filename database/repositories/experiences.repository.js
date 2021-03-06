'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class ExperiencesRepository extends Repository {
	constructor({ DB, ExperiencesDto, Config }) {
		super(DB, ExperiencesDto, Config, 'experiences')
		this.db = DB
	}
}
module.exports = ExperiencesRepository
