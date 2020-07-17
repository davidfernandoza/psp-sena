'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'reusable_parts',
			[
				{
					programs_id: 2,
					programs_reusables_id: 1,
					planned_lines: 100,
					current_lines: 112,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					programs_reusables_id: 1,
					planned_lines: 123.0,
					current_lines: 202.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// -----------------
				{
					programs_id: 4,
					programs_reusables_id: 2,
					planned_lines: 510.0,
					current_lines: 231.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
				// -----------------
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('reusable_parts', null, {})
	}
}
