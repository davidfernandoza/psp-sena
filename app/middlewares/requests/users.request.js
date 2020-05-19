'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))
let body = {}
let passwordRule = {}

class UsersRequest extends Request {
	#joiValidator = {}

	constructor({ JoiValidator, Config, JWTService }) {
		body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
				.allow('', null)
				.optional(),
			organizations_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow('', null)
				.optional(),
			first_name: JoiValidator.string().min(3).max(225).required(),
			last_name: JoiValidator.string().min(3).max(225).required(),
			email: JoiValidator.string()
				.email({ ignoreLength: true })
				.min(8)
				.max(100)
				.required(),
			phone: JoiValidator.string().min(6).max(15).required(),
			password: JoiValidator.string().min(8).max(60).required(),
			rol: JoiValidator.any().valid('ADMIN', 'DEV').required()
		}

		// Reglas para el cambio de pasword
		passwordRule = {
			password: JoiValidator.string().min(8).max(60).required(),
			confirmPassword: JoiValidator.any()
				.valid(JoiValidator.ref('password'))
				.required()
		}

		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
		this.#joiValidator = JoiValidator
	}

	async update(req, res, next) {
		delete body.password
		if (req.method == 'PUT') {
			const bodyRes = await super.bodyValidator(req, body)
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}

	async password(req, res, next) {
		if (req.method != 'GET' && req.method != 'DELETE') {
			const bodyRes = await super.bodyValidator(req, passwordRule) // validacion de cuerpo
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}
}
module.exports = UsersRequest
