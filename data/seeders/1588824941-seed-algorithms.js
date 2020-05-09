'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'algorithms',
			[
				{
					name: 'Name Ipsum 1',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Name Ipsum 2',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Name Ipsum 3',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Name Ipsum 4',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Name Ipsum 5',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Name Ipsum 6',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Name Ipsum 7',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Name Ipsum 8',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Name Ipsum 9',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Name Ipsum 10',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('algorithms', null, {})
	}
}
