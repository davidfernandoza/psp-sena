'use strict'
const { morphism } = require('morphism')

class ResponseController {
	#doneString = null
	#app = null

	constructor({DoneString, Config}) {
		this.#app = Config.APP_NAME.toUpperCase()
		
		// Singleton manual del objeto de mensajes
		if (!this.#doneString) {
			this.#doneString = DoneString
		}
	}

	// Funcion que responde al cliente
	async send(options) {
		/*
		 * Atributo no encontrado
		 */

		 const {res, entity, code, dto, addSubDto, typeDto} = options
		 let returnEntity = entity
		 let returnCode = code

		if (!entity) {
			this.#doneString.DON404.payload = entity
			return res
				.status(this.#doneString.DON404.status)
				.send(this.#doneString.DON404)
		}

		// Respuesta WEB
		if (code == 'OK') {
			entity.app = this.#app
			return res.render(entity.page, entity)
		}

		// Atributo OK
		else if (
			code == 'DON200' ||
			code == 'DON201' ||
			code == 'DON200L' ||
			code == 'DON201L'
		) {
			const subDto = !addSubDto ? null : addSubDto
			const dtoMap = !typeDto
				? await dto.api(subDto)
				: await dto[typeDto](subDto)
				
			if (code == 'DON200L' || code == 'DON201L') {
				returnEntity = entity.map(item => morphism(dtoMap, item))
				returnCode = code == 'DON200L' ? 'DON200' : 'DON201'
			} else {
				returnEntity = morphism(dtoMap, entity)
				returnCode = code
			}
		}
		this.#doneString[returnCode].payload = returnEntity
		return res
			.status(this.#doneString[returnCode].status)
			.send(this.#doneString[returnCode])
	}
}

module.exports = ResponseController
