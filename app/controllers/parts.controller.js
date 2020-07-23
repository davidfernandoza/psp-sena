'use strict'
class PartsController {
	#sequelize = {}
	#basePartsController = {}
	#newPartsController = {}
	#reusablePartsController = {}
	#planningController = {}
	#responseController = {}
	#dto = {}

	constructor({
		ReusablePartsController,
		PlanningController,
		BasePartsController,
		NewPartsController,
		ResponseController,
		PartsDto,
		DB
	}) {
		this.#sequelize = DB.sequelize
		this.#basePartsController = BasePartsController
		this.#newPartsController = NewPartsController
		this.#reusablePartsController = ReusablePartsController
		this.#responseController = ResponseController
		this.#planningController = PlanningController
		this.#dto = PartsDto
	}

	// -------------------------------------------------------------------------+
	// Crea un nuevo programa con las partes base, reusables y nuevas:

	async create(req, res) {
		const temp = {
			transaction: await this.#sequelize.transaction(),
			body: req.body,
			res: {}
		}

		try {
			temp.body = req.body.base_parts
			temp.res.base_parts = await this.#basePartsController.create(temp)

			temp.body = req.body.new_parts
			temp.res.new_parts = await this.#newPartsController.create(temp)

			temp.body = req.body.reusable_parts
			temp.res.reusable_parts = await this.#reusablePartsController.create(temp)

			temp.body = req.body.planning
			temp.res.planning = await this.#planningController.create(temp)

			//Respuesta exitosa

			await this.#responseController.send({
				res,
				entity: temp.res,
				dto: this.#dto,
				code: 'DON201',
				addSubDto: null,
				typeDto: null
			})
			temp.transaction.commit()
		} catch (error) {
			// console.log(error)
			await temp.transaction.rollback()

			// Validar si el error viene de la base de datos
			let validateDB = true
			try {
				JSON.stringify(JSON.parse(error.message))
			} catch (error) {
				validateDB = false
			}

			if (validateDB) {
				throw new Error(JSON.stringify(JSON.parse(error.message)))
			} else {
				throw new Error(error)
			}
		}
	}
}

module.exports = PartsController
