'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'base_parts',
			[
				{
					// 300
					programs_id: 2,
					programs_base_id: 1,
					planned_lines_base: 510.0,
					planned_lines_deleted: 53.0,
					planned_lines_edits: 50.0,
					planned_lines_added: 75.0,
					current_lines_base: 550.0,
					current_lines_deleted: 52.0,
					current_lines_edits: 11.0,
					current_lines_added: 45.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					programs_base_id: 1,
					planned_lines_base: 400.0,
					planned_lines_deleted: 113.0,
					planned_lines_edits: 100.0,
					planned_lines_added: 15.0,
					current_lines_base: 500.0,
					current_lines_deleted: 50.0,
					current_lines_edits: 63.0,
					current_lines_added: 23.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// --------------------------
					programs_id: 3,
					programs_base_id: 2,
					planned_lines_base: 897.0,
					planned_lines_deleted: 532.0,
					planned_lines_edits: 402.0,
					planned_lines_added: 245.0,
					current_lines_base: 1017.0,
					current_lines_deleted: 671.0,
					current_lines_edits: 143.0,
					current_lines_added: 152.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// --------------------------
				{
					programs_id: 4,
					programs_base_id: 1,
					planned_lines_base: 613.0,
					planned_lines_deleted: 0.0,
					planned_lines_edits: 128.0,
					planned_lines_added: 43.0,
					current_lines_base: 501.0,
					current_lines_deleted: 112.0,
					current_lines_edits: 239.0,
					current_lines_added: 52.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('base_parts', null, {})
	}
}
