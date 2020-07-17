'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'forgot_password',
			[
				{
					users_id: 1,
					token: 'sihjd9fihsdsihjd9fihsd89azd',
					expiration: new Date().toDateString(),
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 2,
					token: 'sihjd9fihsd89azsdf0988sd2',
					expiration: new Date().toDateString(),
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('forgot_password', null, {})
	}
}
