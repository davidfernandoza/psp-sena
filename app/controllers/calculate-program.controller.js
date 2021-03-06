'use strict'

class CalculateProgramController {
	#newPartsController = {}
	#basePartsController = {}
	#reusablePartsController = {}
	#timeLogController = {}
	#planningController = {}
	#phasesRepository = {}
	#phasesProcessController = {}
	#defectLogController = {}

	constructor({
		NewPartsController,
		BasePartsController,
		ReusablePartsController,
		TimeLogController,
		PlanningController,
		PhasesProcessController,
		DefectLogController,
		PhasesRepository
	}) {
		this.#basePartsController = BasePartsController
		this.#newPartsController = NewPartsController
		this.#reusablePartsController = ReusablePartsController
		this.#planningController = PlanningController
		this.#timeLogController = TimeLogController
		this.#phasesRepository = PhasesRepository
		this.#phasesProcessController = PhasesProcessController
		this.#defectLogController = DefectLogController
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

		try {
			let addLines = 0
			let subLines = 0
			if (newPats)
				for (const item of newPats) {
					if (!item.current_lines) throw 0
					addLines += item.current_lines
				}
			if (reusableParts)
				for (const item of reusableParts) {
					if (!item.current_lines) throw 0
					addLines += item.current_lines
				}
			if (baseParts)
				for (const item of baseParts) {
					if (
						!item.current_lines_base ||
						!item.current_lines_added ||
						!item.current_lines_deleted
					)
						throw 0
					addLines += item.current_lines_base
					addLines += item.current_lines_added
					subLines += item.current_lines_deleted
				}
			return addLines - subLines
		} catch (error) {
			return 0
		}
	}

	// ----------------------------------------------------------------------------------+
	/*
	 * Este metodo calcula:
	 * - El tiempo total por fase
	 * - Los defectos totales por fase
	 * - Actualiza la planeacion del programa
	 */
	async phasesCurrentAttributes(idProgram, transaction) {
		try {
			const plannings = await this.#planningController.getAllByProgram({
				return: true,
				params: { id: idProgram }
			})
			const phases = await this.#phasesRepository.getPhasesCount()
			let timeLogs = await this.#timeLogController.getAllByProgram({
				return: true,
				params: { id: idProgram }
			})
			let defectLogs = await this.#defectLogController.getAllByProgram({
				return: true,
				params: { id: idProgram }
			})
			if (timeLogs && plannings) {
				let totalDefectLog = [],
					indexDefects = {}
				const totalTimeLog = await this.#phasesProcessController.countAttributes(
					{
						attributeFromCount: 'phases_id',
						attributeAcumulator: 'delta_time',
						amountPhases: phases,
						body: timeLogs
					}
				)

				if (!totalTimeLog) throw 'TimeNull'

				// Validar si tiene defectos para sumar
				if (defectLogs) {
					totalDefectLog = await this.#phasesProcessController.countAttributes({
						attributeFromCount: 'phase_added_id',
						amountPhases: phases,
						body: defectLogs
					})

					indexDefects = totalDefectLog.reduce(
						(acumulator, item) => ({
							...acumulator,
							[item.phases_id]: item
						}),
						0
					)
				}

				// Se indexa los arrays de tiempos, defectos y planeaciones con el id de la fase
				// Esto es lo mas lindo que hay 😍
				const indexTime = totalTimeLog.reduce(
					(acumulator, item) => ({
						...acumulator,
						[item.phases_id]: item
					}),
					0
				)

				const indexPlannig = plannings.reduce(
					(acumulator, item) => ({
						...acumulator,
						[item.phases_id]: item
					}),
					0
				)

				// Se actualiza la planeacion con los datos finales
				for (let i = 1; i <= phases; i++) {
					const defect = totalDefectLog.length > 0 ? indexDefects[i].amount : 0
					await this.#planningController.update({
						params: { id: indexPlannig[i].id },
						body: {
							current_time: indexTime[i].amount,
							current_defect: defect
						},
						dto: {
							current_time: 'current_time',
							current_defect: 'current_defect'
						},
						transaction
					})
				}
				return true
			} else {
				return false
			}
		} catch (error) {
			if (error == 'TimeNull') {
				return null
			}
			return false
		}
	}
}

module.exports = CalculateProgramController
