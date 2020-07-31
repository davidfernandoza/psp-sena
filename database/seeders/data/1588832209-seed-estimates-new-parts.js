'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'estimates_new_parts',
			[
				{
					estimates_id: 1,
					new_parts_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 2,
					new_parts_id: 2,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 3,
					new_parts_id: 3,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 4,
					new_parts_id: 4,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('estimates_new_parts', null, {})
	}
}
