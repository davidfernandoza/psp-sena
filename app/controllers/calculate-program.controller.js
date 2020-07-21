'use strict'

class CalculateProgramController {
	#newPartsController = {}
	#basePartsController = {}
	#reusablePartsController = {}
	#timeLogController = {}
	#planningTimesController = {}
	#phasesRepository = {}
	#phasesProcessController = {}

	constructor({
		NewPartsController,
		BasePartsController,
		ReusablePartsController,
		TimeLogController,
		PlanningTimesController,
		PhasesProcessController,
		PhasesRepository
	}) {
		this.#basePartsController = BasePartsController
		this.#newPartsController = NewPartsController
		this.#reusablePartsController = ReusablePartsController
		this.#planningTimesController = PlanningTimesController
		this.#timeLogController = TimeLogController
		this.#phasesRepository = PhasesRepository
		this.#phasesProcessController = PhasesProcessController
	}

	/*

	Calcular el tamaño del programa
	Calcular el total de tiempo utilizado por fase
	
	*/

	// Se suman los diferentes valores de tamaño de cada consulta para dar un total de lineas
	async programSize(idProgram) {
		const baseParts = await this.#basePartsController.getAllByProgram({
			return: true,
			params: { id: idProgram }
		})
		const newPats = await this.#newPartsController.getAllByProgram({
			return: true,
			params: { id: idProgram }
		})
		const reusableParts = await this.#reusablePartsController.getAllByProgram({
			return: true,
			params: { id: idProgram }
		})

		let addLines = 0
		let subLines = 0
		for (const item of newPats) {
			addLines += item.current_lines
		}
		for (const item of reusableParts) {
			addLines += item.current_lines
		}
		for (const item of baseParts) {
			addLines += item.current_lines_base
			addLines += item.current_lines_added
			subLines += item.current_lines_deleted
		}
		return addLines - subLines
	}

	// ----------------------------------------------------------------------------------+
	async phasesCurrentTime(idProgram) {
		const planningTimes = await this.#planningTimesController.getAllByProgram({
			return: true,
			params: { id: idProgram }
		})
		const phases = await this.#phasesRepository.getPhasesCount()
		const timeLogs = await this.#timeLogController.getAllByProgram({
			return: true,
			params: { id: idProgram }
		})
		const totalTimeLog = await this.#phasesProcessController.countAttributes({
			attributeFromCount: 'phases_id',
			attributeAcumulator: 'delta_time',
			amountPhases: phases,
			body: timeLogs
		})

		// Insercion en planeacion de tiempos que depende del numero de fases
		for (let i = 1; i <= phases; i++) {
			let iterator = i - 1

			// Se valida si el registro de log de tiempo coincide con la fase actual en la iteracion
			if (totalTimeLog[iterator].phases_id == i) {
				const amount = totalTimeLog[iterator].amount
				const phases_id = totalTimeLog[iterator].phases_id

				// Se busca el registro de planeacion de tiempos con la misma fase del log de tiempos
				for (const item of planningTimes) {
					if (item.phases_id == phases_id) {
						/*
						 * Se actualiza el registro encontrado con la suma total de la fase
						 */
						await this.#planningTimesController.update({
							params: { id: item.id },
							body: { current_time: amount },
							dto: { current_time: 'current_time' },
							return: true
						})
					}
				}
			}
		}
	}
}

module.exports = CalculateProgramController
