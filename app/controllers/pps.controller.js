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

	constructor({
		PPSDto,
		ProgramsController,
		ResponseController,
		LanguagesController,
		NewPartsController,
		BasePartsController,
		ReusablePartsController,
		TimeLogController,
		PhasesRepository,
		DefectLogController
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
	}

	// --------------------------------------------------------------------------

	async getAllByProgram(req, res) {
		const response = {},
			{ id: idProgram } = req.params,
			tempData = await this.queryDataProgram(idProgram),
			program_lines = await this.countLinesFromParts(tempData)

		response.language = tempData.language.name
		response.program_lines = program_lines
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
}

module.exports = PPSController
