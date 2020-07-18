'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { morphism } = require('morphism')

class DefectLogRepository extends Repository {
	#dto = {}

	constructor({ DB, DefectLogDto, Config }) {
		super(DB, DefectLogDto, Config, 'defect_log')
		this.db = DB
		this.#dto = DefectLogDto
	}

	//  ----------------------------------------------------------------------
	async getDefectsCountByProgram(idProgram) {
		const defects = await this.db[this.entity].findAndCountAll({
				where: {
					programs_id: idProgram
				}
			}),
			defectsList = await defects.rows.map(item => morphism(this.#dto, item))

		return {
			amountDefects: defects.count,
			rows: defectsList
		}
	}
}
module.exports = DefectLogRepository
