'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'experiences',
			[
				{
					users_id: 1,
					positions: 'Administrador de proyecto',
					years_generals: '7',
					years_configuration: '4',
					years_integration: '1',
					years_requirements: '3',
					years_design: '8',
					years_tests: '7',
					years_support: '3',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 2,
					positions: 'Desarrollador backend',
					years_generals: '5',
					years_configuration: '6',
					years_integration: '1',
					years_requirements: '3',
					years_design: '3',
					years_tests: '9',
					years_support: '8',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('experiences', null, {})
	}
}
