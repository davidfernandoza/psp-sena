'use strict'
const DB = require('./../../mocks/models')
const Config = require('./../../../config/env')
const { DefectLogRepository } = require('./../../../database/repositories')
const { DefectLogDto } = require('./../../../dto')
const { DefectLogDataMock } = require('./../../mocks/mock/defect_log')
const [addSubDto, transaction] = Array(2).fill(null)
const _DefectLogRepository = new DefectLogRepository({
	DB,
	Config,
	DefectLogDto: new DefectLogDto()
})

jest.mock('./../../mocks/models/defect_log', () => () => {
	const { DefectLogDataMock } = require('./../../mocks/mock/defect_log')
	const SequelizeMock = require('sequelize-mock')
	const _defect_log = { ...DefectLogDataMock.defect_log }
	const DBMock = new SequelizeMock()
	return DBMock.define('defect_log', _defect_log)
})

beforeEach(() => {
	jest.clearAllMocks()
})

describe('Defect Log Repository Test', () => {
	it('Should return a defect log by id', async () => {
		const _defect_log = { ...DefectLogDataMock.defect_log }
		const expected = await _DefectLogRepository.get(
			{ id: _defect_log.id },
			addSubDto,
			transaction
		)
		expect(expected).toMatchObject(_defect_log)
	})

	it('Should return a defect log collection', async () => {
		const _defect_log = { ...DefectLogDataMock.defect_log }
		const expected = await _DefectLogRepository.getAll({})
		expect(expected).toMatchObject([_defect_log])
	})

	it('Should return a defect_log collection and count them, by program id', async () => {
		const _defect_log = { ...DefectLogDataMock.defect_log }
		const _defect_log_by_program = {
			...DefectLogDataMock.defect_log_by_program
		}
		const expected = await _DefectLogRepository.getDefectsCountByProgram(
			_defect_log.programs_id
		)
		expect(expected).toMatchObject(_defect_log_by_program)
	})

	it('Should create a defect log', async () => {
		const _defect_log = { ...DefectLogDataMock.defect_log }
		delete _defect_log.id
		const expected = await _DefectLogRepository.create(
			{ data: _defect_log },
			addSubDto,
			transaction
		)
		expect(expected).toMatchObject(_defect_log)
	})

	it('Should update a defect log by id', async () => {
		const _defect_log = { ...DefectLogDataMock.defect_log }
		_defect_log.phase_added_id = 2
		const expected = await _DefectLogRepository.update({
			id: _defect_log.id,
			data: _defect_log,
			addSubDto,
			transaction
		})
		expect(expected).toEqual(1)
	})

	it('Should delete a defect_log by id', async () => {
		const _defect_log = { ...DefectLogDataMock.defect_log }
		const expected = await _DefectLogRepository.delete(
			{ id: _defect_log.id },
			transaction
		)
		expect(expected).toEqual(1)
	})
})
