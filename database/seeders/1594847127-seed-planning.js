'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'plannings',
			[
				// Programa 1 ----------------------------------------------- 1 dias
				{
					phases_id: 1,
					programs_id: 1,
					planning_time: 45,
					current_time: 60,
					planning_defect: 1,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 2,
					programs_id: 1,
					planning_time: 45,
					current_time: 60,
					planning_defect: 4,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 3,
					programs_id: 1,
					planning_time: 65,
					current_time: 96,
					planning_defect: 5,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 4,
					programs_id: 1,
					planning_time: 45,
					current_time: 60,
					planning_defect: 2,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 5,
					programs_id: 1,
					planning_time: 35,
					current_time: 30,
					planning_defect: 0,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 6,
					programs_id: 1,
					planning_time: 145,
					current_time: 175,
					planning_defect: 1,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// Programa 2 ----------------------------------------------- 3 dias
				{
					phases_id: 1,
					programs_id: 2,
					planning_time: 250,
					current_time: 300,
					planning_defect: 3,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 2,
					programs_id: 2,
					planning_time: 250,
					current_time: 300,
					planning_defect: 8,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 3,
					programs_id: 2,
					planning_time: 113,
					current_time: 120,
					planning_defect: 1,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 4,
					programs_id: 2,
					planning_time: 312,
					current_time: 360,
					planning_defect: 2,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 5,
					programs_id: 2,
					planning_time: 209,
					current_time: 210,
					planning_defect: 1,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 6,
					programs_id: 2,
					planning_time: 143,
					current_time: 150,
					planning_defect: 2,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// Programa 3 ----------------------------------------------- 2 dias
				{
					phases_id: 1,
					programs_id: 3,
					planning_time: 150,
					current_time: 180,
					planning_defect: 3,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 2,
					programs_id: 3,
					planning_time: 243,
					current_time: 270,
					planning_defect: 1,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 3,
					programs_id: 3,
					planning_time: 31,
					current_time: 30,
					planning_defect: 9,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 4,
					programs_id: 3,
					planning_time: 211,
					current_time: 210,
					planning_defect: 7,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 5,
					programs_id: 3,
					planning_time: 176,
					current_time: 180,
					planning_defect: 5,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 6,
					programs_id: 3,
					planning_time: 78,
					current_time: 90,
					planning_defect: 8,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},

				// Programa 4 ----------------------------------------------- 1 dia
				{
					phases_id: 1,
					programs_id: 4,
					planning_time: 60,
					current_time: 60,
					// current_time: null,
					planning_defect: 2,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 2,
					programs_id: 4,
					planning_time: 45,
					current_time: 60,
					// current_time: null,
					planning_defect: 5,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 3,
					programs_id: 4,
					planning_time: 65,
					current_time: 96,
					// current_time: null,
					planning_defect: 3,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 4,
					programs_id: 4,
					planning_time: 45,
					current_time: 60,
					// current_time: null,
					planning_defect: 2,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 5,
					programs_id: 4,
					planning_time: 35,
					current_time: 30,
					// current_time: null,
					planning_defect: 3,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					phases_id: 6,
					programs_id: 4,
					planning_time: 120,
					current_time: 174,
					// current_time: null,
					planning_defect: 2,
					current_defect: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('plannings', null, {})
	}
}
