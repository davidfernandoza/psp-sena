'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))
const { morphism } = require('morphism') // morphism(dto, entity)

class PlanningTimesController extends Controller {
	constructor({
		PlanningTimesRepository,
		PlanningTimesDto,
		ResponseController
	}) {
		super(PlanningTimesRepository, PlanningTimesDto, ResponseController)
	}

	// -----------------------------------------------------------------------

	async create(req, res) {
		const planningTimesArray = [],
			transaction = !req.transaction ? null : req.transaction

		for (const item of req.body) {
			item.programs_id = req.programs_id ? req.programs_id : item.programs_id
			const newDataReturn = await super.create({
				body: item,
				transaction: transaction
			})

			planningTimesArray.push(newDataReturn)
		}
		if (transaction)
			return planningTimesArray.map(item =>
				morphism(this.entityDto.schema, item)
			)
		await this.responseController.send({
			res,
			entity: planningTimesArray,
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

module.exports = PlanningTimesController
