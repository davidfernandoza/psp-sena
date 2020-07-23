'use strict'

class AnalysisToolsController {
	#analysisToolsDto = {}
	#responseController = {}
	#planningRepository = {}
	#defectLogRepository = {}
	#programsController = {}
	#phasesProcessController = {}
	#phasesRepository = {}

	constructor({
		PlanningRepository,
		PhasesProcessController,
		DefectLogRepository,
		ResponseController,
		ProgramsController,
		AnalysisToolsDto,
		PhasesRepository
	}) {
		this.#analysisToolsDto = AnalysisToolsDto
		this.#responseController = ResponseController
		this.#planningRepository = PlanningRepository
		this.#defectLogRepository = DefectLogRepository
		this.#programsController = ProgramsController
		this.#phasesProcessController = PhasesProcessController
		this.#phasesRepository = PhasesRepository
	}

	// ------------------------------------------------------------------

	async getAllByUser(req, res) {
		const programs = await this.#programsController.getAllByUser(req)
		if (await this.minProgramsValidator(programs)) {
			const arrayReturn = await this.responseHandler(programs)
			return await this.#responseController.send({
				res,
				entity: arrayReturn,
				dto: this.#analysisToolsDto,
				code: 'DON200',
				addSubDto: null,
				typeDto: null
			})
		}
	}

	// ------------------------------------------------------------------
	// minimos 3 para enviar graficas
	async minProgramsValidator(arrayPrograms) {
		if (arrayPrograms == [] || arrayPrograms.length < 3) throw Error('ERR404')
		return true
	}

	// ------------------------------------------------------------------

	async responseHandler(arrayPrograms) {
		const arrayReturn = []

		/*
		 * Por cada programa que itera genera un objeto de respuesta
		 * - se consulta los defectos y su cantidad
		 * - se consulta la cantidad de fases
		 * - se consulta el total de tiempo de desarrollo del programa
		 */

		for (const program of arrayPrograms) {
			const objectReturn = {
					program_name: program.name,
					size: program.total_lines
				},
				defects = await this.#defectLogRepository.getDefectsCountByProgram(
					program.id
				),
				phases = await this.#phasesRepository.getPhasesCount(),
				time = await this.#planningRepository.getTotalCurrentTime(program.id)

			// Se cuenta la cantidad de defectos agregado en cada fase
			objectReturn.defects_injected = await this.#phasesProcessController.countAttributes(
				{
					attributeFromCount: 'phase_added_id',
					amountPhases: phases,
					body: defects.rows
				}
			)
			// Se cuenta la cantidad de defectos removidos en cada fase
			objectReturn.defects_removed = await this.#phasesProcessController.countAttributes(
				{
					attributeFromCount: 'phase_removed_id',
					amountPhases: phases,
					body: defects.rows
				}
			)

			// Se arama el objeto y se agrega al array de respuesta
			objectReturn.defects = defects.amountDefects
			objectReturn.time = time
			arrayReturn.push(objectReturn)
		}
		return arrayReturn
	}
}

module.exports = AnalysisToolsController
