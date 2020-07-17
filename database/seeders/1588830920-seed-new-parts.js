'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'new_parts',
			[
				{
					programs_id: 1,
					types_sizes_id: 5,
					name: 'Parte nueva 1 programa 1',
					planned_lines: 324.24,
					number_methods_planned: 6,
					current_lines: 501.0,
					number_methods_current: 9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 1,
					types_sizes_id: 3,
					name: 'Parte nueva 2 programa 1',
					planned_lines: 135.0,
					number_methods_planned: 12,
					current_lines: 112.0,
					number_methods_current: 10,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					types_sizes_id: 30,
					name: 'Parte nueva 1 programa 2',
					planned_lines: 621.28,
					number_methods_planned: 8,
					current_lines: 703.0,
					number_methods_current: 9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					types_sizes_id: 15,
					name: 'Parte nueva 1 programa 3',
					planned_lines: 405.02,
					number_methods_planned: 14,
					current_lines: 360.0,
					number_methods_current: 12,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					types_sizes_id: 22,
					name: 'Parte nueva 2 programa 3',
					planned_lines: 19.4,
					number_methods_planned: 5,
					current_lines: 23,
					number_methods_current: 5,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				//  --------
				{
					programs_id: 4,
					types_sizes_id: 13,
					name: 'Parte nueva 1 programa 4',
					planned_lines: 290.07,
					number_methods_planned: 18,
					current_lines: 250.0,
					number_methods_current: 15,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
				//  --------
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('new_parts', null, {})
	}
}
