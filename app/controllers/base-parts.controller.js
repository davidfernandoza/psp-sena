'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))
const { morphism } = require('morphism') // morphism(dto, entity)

class BasePartsController extends Controller {
	constructor({ BasePartsRepository, BasePartsDto, Config, DoneString }) {
		super(BasePartsRepository, BasePartsDto, Config, DoneString)
	}

	async create(req, res) {
		const basePartsArray = [],
			transaction = !req.transaction ? null : req.transaction

		for (const item of req.body) {
			item.programs_id = req.programs_id ? req.programs_id : item.programs_id
			const col = await super.create({
				body: item,
				transaction: transaction
			})

			basePartsArray.push(col)
		}
		if (transaction)
			return basePartsArray.map(item => morphism(this.entityDto.schema, item))
		await this.response(res, basePartsArray, 'DON201L')
	}
}

module.exports = BasePartsController
