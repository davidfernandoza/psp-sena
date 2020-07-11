'use strict'
const { join } = require('path')
const moment = require('moment')
const Controller = require(join(__dirname, '../controller'))

/*
 * Cotrolador que genera un token de autentificación nuevo.
 * Crea un token en la lista negra con el antiguo token
 */
class TokenAuth extends Controller {
	constructor({
		TokenBlackListRepository,
		ResponseController,
		TokenBlackListDto,
		JWTService
	}) {
		super(TokenBlackListRepository, TokenBlackListDto, ResponseController)
		this.JWTServices = JWTService
		this.tokenBlackListRepository = TokenBlackListRepository
	}

	// Nuevo token ---------------------------------------------------------------+

	async create(req, res) {
		const { id, rol, organization } = req
		const { http_auth_token } = req.headers
		const newToken = await this.JWTServices.create(id, rol, organization)
		const responseData = {
			res,
			code: 'DON404',
			dto: this.entityDto,
			entity: null,
			addSubDto: null,
			typeDto: null
		}
		if (newToken.status === 200) {
			if (await this.addBlackList(http_auth_token)) {
				responseData.entity = newToken.payload
				responseData.code = 'DON200'
				return await this.response.send(responseData)
			}
		}
		await this.response.send(responseData)
	}

	// Eliminar token (logout) ----------------------------------------------------+

	async delete(req, res) {
		const { http_auth_token } = req.headers
		const token = await this.JWTServices.decode(http_auth_token)
		const responseData = {
			res,
			code: 'DON404',
			dto: this.entityDto,
			entity: null,
			addSubDto: null,
			typeDto: null
		}
		if (token.status === 200) {
			if (await this.addBlackList(http_auth_token)) {
				responseData.entity = {}
				responseData.code = 'DON204'
				return await this.response.send(responseData)
			}
		}
		return await this.response.send(responseData)
	}

	// Crear token viejo en lista negra --------------------------------------------+

	async addBlackList(token) {
		const created = await this.tokenBlackListRepository.create({
			data: { token: token }
		})

		// Eliminar tokenes caducados
		await this.tokenBlackListRepository.delete(
			moment().subtract(7, 'days').toISOString()
		)

		if (created) {
			return true
		}
		return false
	}
}

module.exports = TokenAuth
