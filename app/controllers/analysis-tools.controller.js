'use strict'

class AnalysisToolsController {
	#analysisToolsDto = {}
	#responseController = {}
	#planningTimesRepository = {}
	#defectLogRepository = {}
	#programsController = {}

	constructor({
		DefectLogRepository,
		PlanningTimesRepository,
		ResponseController,
		AnalysisToolsDto,
		ProgramsController
	}) {
		this.#analysisToolsDto = AnalysisToolsDto
		this.#responseController = ResponseController
		this.#planningTimesRepository = PlanningTimesRepository
		this.#defectLogRepository = DefectLogRepository
		this.#programsController = ProgramsController
	}

	// ------------------------------------------------------------------

	async getAllByUser(req, res) {
		const { id: idUser } = req.params,
			tempReq = {
				params: { id: idUser },
				return: true
			},
			programs = await this.#programsController.getAllByUser(tempReq, res),
			arrayReturn = await this.doGenerateResponseObject(programs)
		return await this.#responseController.send({
			res,
			entity: arrayReturn,
			dto: this.#analysisToolsDto,
			code: 'DON200',
			addSubDto: null,
			typeDto: null
		})
	}

	async doGenerateResponseObject(arrayPrograms) {
		if (arrayPrograms == [] || arrayPrograms < 3) throw Error('ERR404')
		const arrayReturn = []
		for (const program of arrayPrograms) {
			const objectReturn = {
					program_name: program.name,
					size: program.total_lines
				},
				defects = await this.#defectLogRepository.getDefectsCountByProgram(
					program.id
				),
				time = await this.#planningTimesRepository.getTotalCurrentTime(
					program.id
				),
				defectsByPhases = await this.countDefectsByPhase(defects.rows)
			objectReturn.defects = defects.amountDefects
			objectReturn.time = time
			objectReturn.defects_injected = defectsByPhases.defectsInjected
			objectReturn.defects_removed = defectsByPhases.defectsRemoved
			arrayReturn.push(objectReturn)
		}
		return arrayReturn
	}

	async countDefectsByPhase(arrayDefects) {
		const defectsByPhases = {},
			defectsInjected = [],
			defectsRemoved = []

		// por cada fase se suma la cantidad de defectos que pueda tener un programa
		for (let i = 1; i <= 6; i++) {
			let countInjected = 0
			let countRemoved = 0
			for (const defect of arrayDefects) {
				if (defect.schema.phase_added_id == i) countInjected++ // defectos agregados por fase
				if (defect.schema.phase_removed_id == i) countRemoved++ // defectos removidos por fase
			}
			defectsInjected.push({ phases_id: i, amount: countInjected })
			defectsRemoved.push({ phases_id: i, amount: countRemoved })
		}
		defectsByPhases.defectsInjected = defectsInjected
		defectsByPhases.defectsRemoved = defectsRemoved
		return defectsByPhases
	}
}

module.exports = AnalysisToolsController
