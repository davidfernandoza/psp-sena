'use strict'

class PPSController {
	#PPSDto = {}
	#responseController = {}
	constructor({ PPSDto, ResponseController }) {
		this.#PPSDto = PPSDto
		this.#responseController = ResponseController
	}
	// Logica diferente al CRUD base aqui:

	async getAllByProgram(req, res) {}
}

module.exports = PPSController
