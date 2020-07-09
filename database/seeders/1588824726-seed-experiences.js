'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'experiences',
			[
				{
					users_id: 1,
					positions: 'Lorem ipsum dolor',
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
					positions: 'Lorem ipsum dolor',
					years_generals: '5',
					years_configuration: '6',
					years_integration: '1',
					years_requirements: '3',
					years_design: '3',
					years_tests: '9',
					years_support: '8',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 3,
					positions: 'Lorem ipsum dolor',
					years_generals: '3',
					years_configuration: '1',
					years_integration: '6',
					years_requirements: '3',
					years_design: '6',
					years_tests: '8',
					years_support: '0',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 4,
					positions: 'Lorem ipsum dolor',
					years_generals: '2',
					years_configuration: '5',
					years_integration: '7',
					years_requirements: '5',
					years_design: '8',
					years_tests: '7',
					years_support: '7',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 5,
					positions: 'Lorem ipsum dolor',
					years_generals: '7',
					years_configuration: '9',
					years_integration: '6',
					years_requirements: '1',
					years_design: '1',
					years_tests: '8',
					years_support: '9',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 6,
					positions: 'Lorem ipsum dolor',
					years_generals: '3',
					years_configuration: '6',
					years_integration: '6',
					years_requirements: '0',
					years_design: '0',
					years_tests: '4',
					years_support: '5',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 7,
					positions: 'Lorem ipsum dolor',
					years_generals: '7',
					years_configuration: '4',
					years_integration: '3',
					years_requirements: '5',
					years_design: '0',
					years_tests: '0',
					years_support: '3',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 8,
					positions: 'Lorem ipsum dolor',
					years_generals: '9',
					years_configuration: '7',
					years_integration: '7',
					years_requirements: '1',
					years_design: '3',
					years_tests: '4',
					years_support: '0',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 9,
					positions: 'Lorem ipsum dolor',
					years_generals: '1',
					years_configuration: '9',
					years_integration: '1',
					years_requirements: '1',
					years_design: '4',
					years_tests: '6',
					years_support: '9',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 10,
					positions: 'Lorem ipsum dolor',
					years_generals: '8',
					years_configuration: '1',
					years_integration: '1',
					years_requirements: '4',
					years_design: '9',
					years_tests: '6',
					years_support: '0',
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
