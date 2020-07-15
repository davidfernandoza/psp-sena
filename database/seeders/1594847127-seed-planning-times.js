'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'planning_times',
			[
				{
					phases_id: 1,
					programs_id: 2,
					planning_time: '120',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 1,
					programs_id: 12,
					planning_time: '122',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 2,
					programs_id: 2,
					planning_time: '124',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 2,
					programs_id: 12,
					planning_time: '534',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 3,
					programs_id: 2,
					planning_time: '232',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 3,
					programs_id: 12,
					planning_time: '223',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 4,
					programs_id: 2,
					planning_time: '245',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 4,
					programs_id: 12,
					planning_time: '2345',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 5,
					programs_id: 2,
					planning_time: '457',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 5,
					programs_id: 12,
					planning_time: '234',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 6,
					programs_id: 2,
					planning_time: '235',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 6,
					programs_id: 12,
					planning_time: '243',
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('planning_times', null, {})
	}
}
