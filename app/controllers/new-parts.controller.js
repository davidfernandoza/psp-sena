'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))
const { morphism } = require('morphism')

class NewPartsController extends Controller {
	constructor({ NewPartsRepository, NewPartsDto, Config, DoneString }) {
		super(NewPartsRepository, NewPartsDto, Config, DoneString)
	}

	async create(req, res) {
		const newPartsArray = [],
			transaction = !req.transaction ? null : req.transaction

		for (const item of req.body) {
			item.programs_id = req.programs_id ? req.programs_id : item.programs_id
			const col = await super.create({
				body: item,
				transaction: transaction
			})
			newPartsArray.push(col)
		}

		if (transaction)
			return newPartsArray.map(item => morphism(this.entityDto.schema, item))

		await this.response(res, newPartsArray, 'DON201L')
	}
}

module.exports = NewPartsController
