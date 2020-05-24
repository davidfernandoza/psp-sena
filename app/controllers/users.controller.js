'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class UsersController extends Controller {
	constructor({ UsersRepository, UsersDto, Config, StringHelper, DoneString }) {
		super(UsersRepository, UsersDto, Config, StringHelper, DoneString)
	}

	// --------------------------------------------------------------------------
	async create(req, res) {
		req.body.organizations_id = req.organization
		req.body.password = await super.passwordEncryption(req)
		return super.create(req, res)
	}

	// --------------------------------------------------------------------------
	async update(req, res) {
		delete req.body.password
		req.body.organizations_id =
			!req.body.organizations_id || req.body.organizations_id == ''
				? null
				: req.body.organizations_id
		return super.update(req, res)
	}

	// --------------------------------------------------------------------------
	async getAll(req, res) {
		const machAttribute = req.route.path == '/free' ? null : req.organization
		const users = await super.getAllAttribute('organizations_id', machAttribute)
		super.response(res, users, 'DON200L')
	}

	// --------------------------------------------------------------------------
	async getAllByInclude(req, res) {
		const { id: idProject } = req.params
		let entities = await this.entityRepository.getAllByInclude(
			'projects',
			idProject
		)
		return await this.response(res, entities, 'DON200L')
	}
}

module.exports = UsersController
