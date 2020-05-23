'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'standard_defects',
			[
				{
					name: 'DOCUMENTATION',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'SYNTAX',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'BUILD',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'PACKAGE',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'ASSIGMENT',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'INTERFACE',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'CHECKING',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'DATA',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'FUNCTION',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'SYSTEM',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'ENVIRONMENT',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('standard_defects', null, {})
	}
}
