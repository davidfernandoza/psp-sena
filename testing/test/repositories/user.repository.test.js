'user strict'

const { UsersRepository } = require('./../../../database/repositories')
const DB = require('./../../mocks/models')
const { UsersDto } = require('./../../../dto')
const Config = require('./../../../config/env')
const { EncryptionHelper } = require('./../../../helpers')
const [addSubDto, transaction] = Array(2).fill(null)
const dto = new UsersDto()
const helper = new EncryptionHelper({ Config })

let {
	UserModelMock: { user }
} = require('./../../mocks')

const _user = { ...user }

jest.mock('./../../mocks/models/users', () => () => {
	const SequelizeMock = require('sequelize-mock')
	const DBMock = new SequelizeMock()
	return DBMock.define('users', {
		id: 1,
		organizations_id: 1,
		first_name: 'Dario Fernando',
		last_name: 'Franco',
		email: 'dario@email.com',
		phone: '+57-3214567823',
		rol: 'ADMIN'
	})
})

describe('User Repository Test', () => {
	it('Should return a user by id', async () => {
		const _userRepository = new UsersRepository({
			DB,
			UsersDto: dto,
			Config,
			EncryptionHelper: helper
		})
		const expected = await _userRepository.get(
			{ id: _user.id },
			addSubDto,
			transaction
		)

		expect(expected).toMatchObject(_user)
	})
})
