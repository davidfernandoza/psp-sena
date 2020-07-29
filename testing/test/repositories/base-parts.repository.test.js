'use strict'
const DB = require('./../../mocks/models')
const Config = require('./../../../config/env')
const { BasePartsRepository } = require('./../../../database/repositories')
const { BasePartsDto } = require('./../../../dto')
const { BasePartsDataMock } = require('./../../mocks/mock/base-parts')
const [addSubDto, transaction] = Array(2).fill(null)
const _basePartsRepository = new BasePartsRepository({
	DB,
	Config,
	BasePartsDto: new BasePartsDto()
})

jest.mock('./../../mocks/models/base_parts', () => () => {
	const { BasePartsDataMock } = require('./../../mocks/mock/base-parts')
	const SequelizeMock = require('sequelize-mock')
	const _base_part = { ...BasePartsDataMock.base_part }
	const DBMock = new SequelizeMock()
	return DBMock.define('base_parts', _base_part)
})

beforeEach(() => {
	jest.clearAllMocks()
})

describe('Base Parts Repository Test', () => {
	it('Should return a base part by id', async () => {
		const _base_part = { ...BasePartsDataMock.base_part }
		const expected = await _basePartsRepository.get(
			{ id: _base_part.id },
			addSubDto,
			transaction
		)
		expect(expected).toMatchObject(_base_part)
	})

	it('Should return a base parts collection', async () => {
		const _base_part = { ...BasePartsDataMock.base_part }
		const expected = await _basePartsRepository.getAll({})
		expect(expected).toMatchObject([_base_part])
	})

	it('Should create a base part', async () => {
		const _base_part = { ...BasePartsDataMock.base_part }
		delete _base_part.id
		const expected = await _basePartsRepository.create(
			{ data: _base_part },
			addSubDto,
			transaction
		)
		expect(expected).toMatchObject(_base_part)
	})

	it('Should update a base part by id', async () => {
		const _base_part = { ...BasePartsDataMock.base_part }
		const expected = await _basePartsRepository.update({
			id: _base_part.id,
			data: {
				programs_id: 1,
				programs_base_id: 1,
				planned_lines_base: 5,
				planned_lines_deleted: 3,
				planned_lines_edits: 4,
				planned_lines_added: 36,
				current_lines_base: 13,
				current_lines_deleted: 2,
				current_lines_edits: 6,
				current_lines_added: 54
			},
			addSubDto,
			transaction
		})
		expect(expected).toEqual(1)
	})

	it('Should delete a base_part by id', async () => {
		const _base_part = { ...BasePartsDataMock.base_part }
		const expected = await _basePartsRepository.delete(
			{ id: _base_part.id },
			transaction
		)
		expect(expected).toEqual(1)
	})
})
