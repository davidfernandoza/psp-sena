'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'planning_times',
			[
				// Programa 1 ----------------------------------------------- 1 dias
				{
					phases_id: 1,
					programs_id: 1,
					planning_time: 45,
					current_time: 60,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 2,
					programs_id: 1,
					planning_time: 45,
					current_time: 60,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 3,
					programs_id: 1,
					planning_time: 65,
					current_time: 96,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 4,
					programs_id: 1,
					planning_time: 45,
					current_time: 60,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 5,
					programs_id: 1,
					planning_time: 35,
					current_time: 30,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 6,
					programs_id: 1,
					planning_time: 145,
					current_time: 175,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// Programa 2 ----------------------------------------------- 3 dias
				{
					phases_id: 1,
					programs_id: 2,
					planning_time: 250,
					current_time: 300,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 2,
					programs_id: 2,
					planning_time: 250,
					current_time: 300,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 3,
					programs_id: 2,
					planning_time: 113,
					current_time: 120,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 4,
					programs_id: 2,
					planning_time: 312,
					current_time: 360,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 5,
					programs_id: 2,
					planning_time: 209,
					current_time: 210,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 6,
					programs_id: 2,
					planning_time: 143,
					current_time: 150,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// Programa 3 ----------------------------------------------- 2 dias
				{
					phases_id: 1,
					programs_id: 3,
					planning_time: 150,
					current_time: 180,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 2,
					programs_id: 3,
					planning_time: 243,
					current_time: 270,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 3,
					programs_id: 3,
					planning_time: 31,
					current_time: 30,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 4,
					programs_id: 3,
					planning_time: 211,
					current_time: 210,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 5,
					programs_id: 3,
					planning_time: 176,
					current_time: 180,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 6,
					programs_id: 3,
					planning_time: 78,
					current_time: 90,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},

				// Programa 4 ----------------------------------------------- 1 dia
				{
					phases_id: 1,
					programs_id: 4,
					planning_time: 60,
					// current_time: 60,
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 2,
					programs_id: 4,
					planning_time: 45,
					// current_time: 60,
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 3,
					programs_id: 4,
					planning_time: 65,
					// current_time: 96,
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 4,
					programs_id: 4,
					planning_time: 45,
					// current_time: 60,
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 5,
					programs_id: 4,
					planning_time: 35,
					// current_time: 30,
					current_time: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 6,
					programs_id: 4,
					planning_time: 120,
					// current_time: 174,
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
