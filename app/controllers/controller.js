'use strict'
class Controller {
	#data = {}
	#transaction = {}
	#addSubDto = {}
	#options = {}
	#code = ''

	constructor(EntityRepository, EntityDto, ResponseController) {
		this.entityRepository = EntityRepository
		this.entityDto = EntityDto
		this.responseController = ResponseController
	}

	async getByAttribute(options, addSubDto, transaction) {
		this.#transaction = !transaction ? null : transaction
		this.#addSubDto = !addSubDto ? false : true
		this.#options = {
			data: {
				attribute: options.attribute,
				value: options.value
			},
			type: options.type,
			dto: options.dto
		}
		if (options.limit) {
			this.#options.limit = options.limit
		}

		this.#data = await this.entityRepository.getByAttribute(
			this.#options,
			this.#addSubDto,
			this.#transaction
		)

		if (options.return || this.#transaction) return this.#data
		switch (options.type) {
			case 'all':
				this.#code = 'DON200L'
				break
			default:
				this.#code = 'DON200'
		}
		await this.responseController.send({
			res: options.res,
			entity: this.#data,
			dto: this.entityDto,
			code: this.#code,
			addSubDto: this.#addSubDto,
			typeDto: null
		})
	}

	// ------------------------------------------------------------------------------

	async getAll(req, res) {
		this.#transaction = !req.transaction ? null : req.transaction
		this.#addSubDto = !req.addSubDto ? false : true
		this.#code = 'DON200L'
		if (req.options) this.#options = req.options
		else {
			this.#options = {}
		}

		this.#data = await this.entityRepository.getAll(
			this.#options,
			this.#addSubDto,
			this.#transaction
		)

		if (req.return || this.#transaction) return this.#data
		await this.responseController.send({
			res,
			entity: this.#data,
			dto: this.entityDto,
			code: this.#code,
			addSubDto: this.#addSubDto,
			typeDto: null
		})
	}

	async get(req, res) {
		this.#transaction = !req.transaction ? null : req.transaction
		this.#addSubDto = !req.addSubDto ? false : true
		this.#code = 'DON200'
		if (req.options) this.#options = req.options
		else {
			this.#options.id = req.params.id
		}

		this.#data = await this.entityRepository.get(
			this.#options,
			this.#addSubDto,
			this.#transaction
		)
		if (req.return || this.#transaction) return this.#data
		await this.responseController.send({
			res,
			entity: this.#data,
			dto: this.entityDto,
			code: this.#code,
			addSubDto: this.#addSubDto,
			typeDto: null
		})
	}

	async create(req, res) {
		this.#transaction = !req.transaction ? null : req.transaction
		this.#addSubDto = !req.addSubDto ? false : true
		this.#code = 'DON201'
		if (req.options) this.#options = req.options
		else {
			this.#options.data = req.body
		}
		delete this.#options.data.id

		this.#data = await this.entityRepository.create(
			this.#options,
			this.#addSubDto,
			this.#transaction
		)
		if (req.return || this.#transaction) return this.#data
		await this.responseController.send({
			res,
			entity: this.#data,
			dto: this.entityDto,
			code: this.#code,
			addSubDto: this.#addSubDto,
			typeDto: null
		})
	}

	async update(req, res) {
		this.#transaction = !req.transaction ? null : req.transaction
		this.#addSubDto = !req.addSubDto ? false : true
		this.#code = 'DON204'
		if (req.options) this.#options = req.options
		else {
			this.#options = {
				id: req.params.id,
				data: req.body,
				dto: req.dto
			}
		}

		delete this.#options.data.id
		this.#data = await this.entityRepository.update(
			this.#options,
			this.#addSubDto,
			this.#transaction
		)
		if (req.return || this.#transaction) return this.#data
		await this.responseController.send({
			res,
			entity: this.#data,
			dto: this.entityDto,
			code: this.#code,
			addSubDto: this.#addSubDto,
			typeDto: null
		})
	}

	async delete(req, res) {
		this.#transaction = !req.transaction ? null : req.transaction
		this.#addSubDto = !req.addSubDto ? false : true
		this.#code = 'DON204'
		if (req.options) this.#options = req.options
		else {
			this.#options.id = req.params.id
		}

		this.#data = await this.entityRepository.delete(
			this.#options,
			this.#transaction
		)
		if (req.return || this.#transaction) return this.#data
		await this.responseController.send({
			res,
			entity: this.#data,
			dto: this.entityDto,
			code: this.#code,
			addSubDto: this.#addSubDto,
			typeDto: null
		})
	}
}

module.exports = Controller
