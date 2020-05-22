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
		return super.update(req, res)
	}

	// --------------------------------------------------------------------------
	async getAll(req, res) {
		const organizations_id = req.organization
		const users = await super.getAllAttribute(
			'organizations_id',
			organizations_id
		)
		super.response(res, users, 'DON200L')
	}
}

module.exports = UsersController
