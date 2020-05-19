'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'phases',
			[
				{
					name: 'PLAN',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'DLD',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'CODE',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'COMPILE',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'UT',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'PM',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('phases', null, {})
	}
}
