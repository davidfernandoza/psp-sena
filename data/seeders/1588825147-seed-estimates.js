'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'estimates',
			[
				{
					languages_id: 1,
					algorithms_id: 1,
					code_lines: '287289344',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 2,
					algorithms_id: 2,
					code_lines: '212726423',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 3,
					algorithms_id: 3,
					code_lines: '909964228',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 4,
					algorithms_id: 4,
					code_lines: '389665954',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 5,
					algorithms_id: 5,
					code_lines: '878209359',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 1,
					algorithms_id: 6,
					code_lines: '029036651',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 2,
					algorithms_id: 7,
					code_lines: '136425831',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 3,
					algorithms_id: 8,
					code_lines: '139573361',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 4,
					algorithms_id: 9,
					code_lines: '473931463',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 5,
					algorithms_id: 10,
					code_lines: '110175547',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('estimates', null, {})
	}
}
