'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))
let body = {}
let passwordRule = {}
let projectRule = {}

class UsersRequest extends Request {
	#joiValidator = {}
	#usersRepository = {}

	constructor({ JoiValidator, Config, JWTService, UsersRepository }) {
		body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow('', 'null', null)
				.optional(),
			organizations_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow('', null)
				.optional(),
			first_name: JoiValidator.string().min(1).max(225).required(),
			last_name: JoiValidator.string().min(1).max(225).required(),
			email: JoiValidator.string()
				.email({ ignoreLength: true })
				.min(8)
				.max(100)
				.required(),
			phone: JoiValidator.string().min(1).max(15).required(),
			password: JoiValidator.string().min(1).max(60).required(),
			rol: JoiValidator.any().valid('ADMIN', 'DEV').required()
		}

		// Reglas para el cambio de pasword
		passwordRule = {
			password: JoiValidator.string().min(8).max(60).required(),
			confirmPassword: JoiValidator.any()
				.valid(JoiValidator.ref('password'))
				.required()
		}

		// Reglas para el procesamiento de proyecto
		projectRule = {
			users_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			projects_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
		}

		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
		this.#joiValidator = JoiValidator
		this.#usersRepository = UsersRepository
	}

	// -----------------------------------------------------------------------
	async update(req, res, next) {
		delete body.password
		if (req.method == 'PUT') {
			if (req.rol == 'DEV') req.body.rol = 'DEV'
			const bodyRes = await super.bodyValidator(req, body)
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}

	// -----------------------------------------------------------------------
	async password(req, res, next) {
		if (req.method != 'GET' && req.method != 'DELETE') {
			const bodyRes = await super.bodyValidator(req, passwordRule) // validacion de cuerpo
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}

	// -----------------------------------------------------------------------
	async project(req, res, next) {
		if (req.method == 'POST' || req.method == 'DELETE') {
			const bodyRes = await super.bodyValidator(req, projectRule) // validacion de cuerpo
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}

	// -----------------------------------------------------------------------
	async organization(req, res, next) {
		let idUser = req.params.id

		// Validacion de pertenencia del usuario en la organizacion, parga gregarle o quitarle un proyecto
		if (
			req.method != 'GET' &&
			(req.route.path == '/add-projects' ||
				req.route.path == '/remove-projects')
		)
			idUser = req.body.users_id

		const user = await this.#usersRepository.get(idUser)
		if (!user) throw new Error('ERR404')

		// Validacion de estado de trabajo de usuario, siesta sin o con organizacion
		if (user.organizations_id) {
			if (user.organizations_id != req.organization) throw new Error('ERR403')

			// Validar si la organizacion que trae el cuerpo trae un nullo o un vacio y si es diferente al padre de la organizacion
			if (
				req.body.organizations_id != '' &&
				req.body.organizations_id != null &&
				req.body.organizations_id != req.organization
			)
				throw new Error('ERR403')

			// No auto despedirce
			if (
				req.body.organizations_id == '' ||
				req.body.organizations_id == null
			) {
				if (req.id == idUser) throw new Error('ERR403')
			}
		} else {
			// validar si el admin actual tiene permisos con la organizacion del cuerpo
			if (req.body.organizations_id != req.organization)
				throw new Error('ERR403')
			req.body.organizations_id = req.organization
		}
		next()
	}
}
module.exports = UsersRequest
