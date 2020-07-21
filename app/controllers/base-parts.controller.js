'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))
const { morphism } = require('morphism') // morphism(dto, entity)

class BasePartsController extends Controller {
	constructor({ BasePartsRepository, BasePartsDto, ResponseController }) {
		super(BasePartsRepository, BasePartsDto, ResponseController)
	}

	// -----------------------------------------------------------------------

	async create(req, res) {
		const basePartsArray = [],
			transaction = !req.transaction ? null : req.transaction

		for (const item of req.body) {
			item.programs_id = req.programs_id ? req.programs_id : item.programs_id
			const program = await super.create({
				body: item,
				transaction: transaction
			})

			basePartsArray.push(program)
		}
		if (transaction)
			return basePartsArray.map(item => morphism(this.entityDto.schema, item))
		await this.responseController.send({
			res,
			entity: basePartsArray,
			dto: this.entityDto,
			code: 'DON201L',
			addSubDto: null,
			typeDto: null
		})
	}

	// -----------------------------------------------------------------------
	async getAllByProgram(req, res) {
		const query = {
			attribute: 'programs_id',
			value: req.params.id,
			type: 'all',
			res: res
		}
		if (req.return) query.return = true
		return await super.getByAttribute(query)
	}
}

module.exports = BasePartsController
