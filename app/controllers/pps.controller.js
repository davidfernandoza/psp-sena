'use strict'

class PPSController {
	#PPSDto = {}
	#responseController = {}
	#languagesController = {}
	#newPartsController = {}
	#basePartsController = {}
	#reusablePartsController = {}
	#timeLogController = {}
	#phasesRepository = {}
	#defectLogController = {}
	#programsController = {}
	#phasesProcessController = {}
	#planningController = {}

	constructor({
		PPSDto,
		ProgramsController,
		ResponseController,
		LanguagesController,
		NewPartsController,
		BasePartsController,
		ReusablePartsController,
		PhasesProcessController,
		TimeLogController,
		PhasesRepository,
		DefectLogController,
		PlanningController
	}) {
		this.#PPSDto = PPSDto
		this.#responseController = ResponseController
		this.#languagesController = LanguagesController
		this.#newPartsController = NewPartsController
		this.#reusablePartsController = ReusablePartsController
		this.#timeLogController = TimeLogController
		this.#phasesRepository = PhasesRepository
		this.#basePartsController = BasePartsController
		this.#defectLogController = DefectLogController
		this.#programsController = ProgramsController
		this.#phasesProcessController = PhasesProcessController
		this.#planningController = PlanningController
	}

	// --------------------------------------------------------------------------

	async getAllByProgram(req, res) {
		const response = {},
			{ id: idProgram } = req.params,
			tempData = await this.queryDataProgram(idProgram),
			program_lines = await this.countLinesFromParts(tempData),
			time_phase = await this.countTimesFromPhases(tempData),
			defects_injected = await this.defectCountHandler(
				tempData,
				'phase_added_id'
			),
			defects_removed = await this.defectCountHandler(
				tempData,
				'phase_removed_id'
			)

		response.language = tempData.language.name
		response.program_lines = program_lines
		response.time_phase = time_phase
		response.time_phase = defects_injected
		response.time_phase = defects_removed

		await this.#responseController.send({
			res,
			entity: response,
			dto: this.#PPSDto,
			code: 'DON200L',
			addSubDto: null,
			typeDto: null
		})
	}

	// --------------------------------------------------------------------------

	async queryDataProgram(idProgram) {
		const tempData = {}
		tempData.programs = await this.#programsController.get({
			params: { id: idProgram }
		})
		if (!tempData.programs) throw Error('ERR404')
		tempData.language = await this.#languagesController.get({
			params: { id: tempData.programs.languages_id }
		})
		tempData.newParts = await this.#newPartsController.getAllByProgram({
			params: { id: idProgram }
		})
		tempData.baseParts = await this.#basePartsController.getAllByProgram({
			params: { id: idProgram }
		})
		tempData.reusableParts = await this.#reusablePartsController.getAllByProgram(
			{
				params: { id: idProgram }
			}
		)
		tempData.timeLogs = await this.#timeLogController.getAllByProgram({
			params: { id: idProgram }
		})
		tempData.defectLogs = await this.#defectLogController.getAllByProgram({
			params: { id: idProgram }
		})
		tempData.planning = await this.#planningController.getAllByProgram({
			params: { id: idProgram }
		})
		tempData.phases = await this.#phasesRepository.getPhasesCount()

		return tempData
	}

	// --------------------------------------------------------------------------

	async countLinesFromParts(tempData) {
		const { baseParts, reusableParts, newParts } = tempData,
			lines = {
				base_planned: 0.0,
				base_current: 0.0,
				deleted_planned: 0.0,
				deleted_current: 0.0,
				modified_planned: 0.0,
				modified_current: 0.0,
				added_planned: 0.0,
				added_current: 0.0,
				reused_planned: 0.0,
				reused_current: 0.0,
				new_planned_lines: 0.0,
				new_current_lines: 0.0
			}

		if (baseParts)
			for (const item of baseParts) {
				lines.base_planned += item.planned_lines_base
				lines.base_current += item.current_lines_base
				lines.deleted_planned += item.planned_lines_deleted
				lines.deleted_current += item.current_lines_deleted
				lines.modified_planned += item.planned_lines_edits
				lines.modified_current += item.current_lines_edits
				lines.added_planned += item.planned_lines_added
				lines.added_current += item.current_lines_added
			}

		if (reusableParts)
			for (const item of reusableParts) {
				lines.reused_planned += item.planned_lines
				lines.reused_current += item.current_lines
			}

		if (newParts)
			for (const item of newParts) {
				lines.new_planned_lines += item.planning_time
				lines.new_current_lines += item.current_time
			}

		return lines
	}

	// --------------------------------------------------------------------------

	async countTimesFromPhases(tempData) {
		let { timeLogs, phases, planning } = tempData
		let to_date_time, totalCurrentTime, totalPlanningTime, sumToDateTime
		let time_phase = []

		/*
		 * Validar si hay registros de tiempos para contarlos e indexarlos
		 * tiempo actual usado
		 */
		if (timeLogs) {
			to_date_time = await this.#phasesProcessController.countAttributes({
				attributeFromCount: 'phases_id',
				attributeAcumulator: 'delta_time',
				amountPhases: phases,
				body: timeLogs
			})

			if (to_date_time) {
				sumToDateTime = to_date_time.reduce(
					(acumulator, item) => acumulator + item.amount,
					0
				)

				to_date_time = to_date_time.reduce(
					(acumulator, item) => ({
						...acumulator,
						[item.phases_id]: item
					}),
					0
				)
			} else timeLogs = null
		}

		// Tiempo planeado
		totalPlanningTime = await this.#phasesProcessController.countAttributes({
			attributeFromCount: 'phases_id',
			attributeAcumulator: 'planning_time',
			amountPhases: phases,
			body: planning
		})
		totalPlanningTime = totalPlanningTime.reduce(
			(acumulator, item) => ({
				...acumulator,
				[item.phases_id]: item
			}),
			0
		)

		// Tiempo final
		totalCurrentTime = await this.#phasesProcessController.countAttributes({
			attributeFromCount: 'phases_id',
			attributeAcumulator: 'current_time',
			amountPhases: phases,
			body: planning
		})

		if (totalCurrentTime) {
			totalCurrentTime = totalCurrentTime.reduce(
				(acumulator, item) => ({
					...acumulator,
					[item.phases_id]: item
				}),
				0
			)
		}

		// --------
		for (let i = 1; i <= phases; i++) {
			const objectTimePhase = {}
			objectTimePhase.phase_id = i
			objectTimePhase.planning_time = totalPlanningTime[i].amount
			objectTimePhase.current_time = !totalCurrentTime
				? 0
				: totalCurrentTime[i].amount

			// Cuanto tiempo lleva en cada fase
			objectTimePhase.to_date_time = !timeLogs ? 0 : to_date_time[i].amount

			// Que porcentaje de ese tiempo equivale al total del tiempo usado
			objectTimePhase.percent = !timeLogs
				? 0
				: (to_date_time[i].amount / sumToDateTime) * 100 * 100

			time_phase.push(objectTimePhase)
		}
		return time_phase
	}

	// --------------------------------------------------------------------------

	async defectCountHandler(tempData, type) {
		let { defectLogs, phases, planning } = tempData
		let to_date_defect, totalCurrentDefect, totalPlanningDefect, sumToDateDefect
		let defect_phase = []

		/*
		 * Validar si hay registros de defectos para contarlos e indexarlos
		 * defecto actual usado
		 */
		if (defectLogs) {
			to_date_defect = await this.#phasesProcessController.countAttributes({
				attributeFromCount: 'phases_id',
				attributeAcumulator: type,
				amountPhases: phases,
				body: defectLogs
			})

			if (to_date_defect) {
				sumToDateDefect = to_date_defect.reduce(
					(acumulator, item) => acumulator + item.amount,
					0
				)

				to_date_defect = to_date_defect.reduce(
					(acumulator, item) => ({
						...acumulator,
						[item.phases_id]: item
					}),
					0
				)
			} else defectLogs = null
		}

		// Defectos inyectados planeados
		if (type == 'phase_added_id') {
			totalPlanningDefect = await this.#phasesProcessController.countAttributes(
				{
					attributeFromCount: 'phases_id',
					attributeAcumulator: 'planning_defect',
					amountPhases: phases,
					body: planning
				}
			)
			totalPlanningDefect = totalPlanningDefect.reduce(
				(acumulator, item) => ({
					...acumulator,
					[item.phases_id]: item
				}),
				0
			)
		}

		// Defectos actuales
		totalCurrentDefect = await this.#phasesProcessController.countAttributes({
			attributeFromCount: 'phases_id',
			attributeAcumulator: 'current_defect',
			amountPhases: phases,
			body: planning
		})

		if (totalCurrentDefect) {
			totalCurrentDefect = totalCurrentDefect.reduce(
				(acumulator, item) => ({
					...acumulator,
					[item.phases_id]: item
				}),
				0
			)
		}

		// --------
		for (let i = 1; i <= phases; i++) {
			const objectDefectPhase = {}
			objectDefectPhase.phase_id = i
			if (type == 'phase_added_id') {
				objectDefectPhase.planning_defects = totalPlanningDefect[i].amount
			}
			objectDefectPhase.current_defects = !totalCurrentDefect
				? 0
				: totalCurrentDefect[i].amount

			// Cuantos defetos lleva en cada fase
			objectDefectPhase.to_date_defects = !defectLogs
				? 0
				: to_date_defect[i].amount

			// Que porcentaje de esos defectos equivale al total del defectos procesados
			objectDefectPhase.percent = !defectLogs
				? 0
				: (to_date_defect[i].amount / sumToDateDefect) * 100 * 100

			defect_phase.push(objectDefectPhase)
		}
		return defect_phase
	}
}

module.exports = PPSController
