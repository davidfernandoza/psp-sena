'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'programs',
			[
				//  1
				{
					users_id: 1,
					languages_id: 1,
					modules_id: 1,
					name: 'Nombre del programa 1',
					description: 'Descripcion del programa 1',
					total_lines: 613.0,
					planning_date: 1577883600 * 1000,
					start_date: 1577883600 * 1000,
					delivery_date: 1577988000 * 1000,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 2
				{
					users_id: 2,
					languages_id: 1,
					modules_id: 2,
					name: 'Nombre del programa 2',
					description: 'Descripcion del programa 2',
					total_lines: 1831.0,
					planning_date: 1580734800 * 1000,
					start_date: 1580734800 * 1000,
					delivery_date: 1581015600 * 1000,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 3
				{
					users_id: 2,
					languages_id: 4,
					modules_id: 1,
					name: 'Nombre del programa - 3',
					description: 'Descripcion del programa 3',
					total_lines: 1083.0,
					planning_date: 1581339600 * 1000,
					start_date: 1581339600 * 1000,
					delivery_date: 1581534000 * 1000,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 4
				{
					users_id: 2,
					languages_id: 2,
					modules_id: 2,
					name: 'Nombre del programa - 4',
					description: 'Descripcion del programa 4',
					total_lines: 922.0,
					// total_lines: null,
					planning_date: 1581858000 * 1000,
					start_date: 1581858000 * 1000,
					delivery_date: 1581944400 * 1000,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},

				// 5
				{
					users_id: 2,
					languages_id: 2,
					modules_id: 2,
					name: 'Nombre del programa - 5',
					description: 'Descripcion del programa 5',
					// total_lines: 922.0,
					total_lines: null,
					planning_date: 1581858000 * 1000,
					start_date: 1581858000 * 1000,
					delivery_date: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('programs', null, {})
	}
}
