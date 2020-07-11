'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))
const { morphism } = require('morphism')
//

class ReusablePartsController extends Controller {
	constructor({
		ReusablePartsRepository,
		ReusablePartsDto,
		ResponseController
	}) {
		super(ReusablePartsRepository, ReusablePartsDto, ResponseController)
	}

	// -------------------------------------------------------------------

	async create(req, res) {
		const reusablePartsArray = [],
			transaction = !req.transaction ? null : req.transaction

		for (const item of req.body) {
			item.programs_id = req.programs_id ? req.programs_id : item.programs_id
			const col = await super.create({
				body: item,
				transaction: transaction
			})

			reusablePartsArray.push(col)
		}

		if (transaction)
			return reusablePartsArray.map(item =>
				morphism(this.entityDto.schema, item)
			)
		return await this.responseController.send({
				res, 
				entity: reusablePartsArray,
				dto: this.entityDto, 
				code: 'DON201L',
				addSubDto: null,
				typeDto: null
			})
	}

	// -------------------------------------------------------------------

	async getAllByProgram(req, res) {
		await super.getByAttribute({
			attribute: 'programs_id',
			value: req.params.id,
			type: 'all',
			res: res
		})
	}
}

module.exports = ReusablePartsController
