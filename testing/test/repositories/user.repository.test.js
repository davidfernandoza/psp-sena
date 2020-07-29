'use strict'
const DB = require('./../../mocks/models')
const Config = require('./../../../config/env')
const { UsersRepository } = require('./../../../database/repositories')
const { UsersDto } = require('./../../../dto')
const { EncryptionHelper } = require('./../../../helpers')
const { UserDataMock } = require('./../../mocks/mock/user')
const [addSubDto, transaction] = Array(2).fill(null)
const _userRepository = new UsersRepository({
	DB,
	Config,
	UsersDto: new UsersDto(),
	EncryptionHelper: new EncryptionHelper({ Config })
})

jest.mock('./../../mocks/models/users', () => () => {
	const { UserDataMock } = require('./../../mocks/mock/user')
	const SequelizeMock = require('sequelize-mock')
	const _user = { ...UserDataMock.user }
	const DBMock = new SequelizeMock()
	return DBMock.define('users', _user)
})

beforeEach(() => {
	jest.clearAllMocks()
})

describe('User Repository Test', () => {
	it('Should return a user by id', async () => {
		const _user = { ...UserDataMock.user }
		const expected = await _userRepository.get(
			{ id: _user.id },
			addSubDto,
			transaction
		)
		expect(expected).toMatchObject(_user)
	})

	it('Should return a users collection', async () => {
		const _user = { ...UserDataMock.user }
		const expected = await _userRepository.getAll({})
		expect(expected).toMatchObject([_user])
	})

	it('Should create a user', async () => {
		const _user = { ...UserDataMock.user }
		_user.password = '123456789'
		delete _user.id
		const expected = await _userRepository.create(
			{ data: _user },
			addSubDto,
			transaction
		)
		expect(expected).toMatchObject(_user)
	})

	it('Should update a user by id', async () => {
		const _user = { ...UserDataMock.user }
		_user.first_name = 'Juan Fernando'
		const expected = await _userRepository.update(
			{
				id: _user.id,
				data: _user
			},
			addSubDto,
			transaction
		)
		expect(expected).toEqual(1)
	})

	it('Should delete a user by id', async () => {
		const _user = { ...UserDataMock.user }
		const expected = await _userRepository.delete({ id: _user.id }, transaction)
		expect(expected).toEqual(1)
	})

	it('Should change password a user by id', async () => {
		const _user = { ...UserDataMock.user }
		const expected = await _userRepository.changePassword(
			_user.id,
			'secreta12345',
			transaction
		)
		expect(expected).toEqual(1)
	})
})
