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
		req.body.password = await super.passwordEncryption(req)
		return super.update(req, res)
	}

	// --------------------------------------------------------------------------
	async getAllAttribute(req, res) {
		let users = {}
		const { id } = req.params
		users = await super.getAllAttribute('organizations_id', id)
		super.response(res, users, 'DON200L')
	}
}

module.exports = UsersController
