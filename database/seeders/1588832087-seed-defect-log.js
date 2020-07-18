'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'defect_log',
			[
				// Programa 1 ----------------------------
				{
					defect_log_chained_id: null,
					programs_id: 1,
					standard_defects_id: 1,
					phase_added_id: 1,
					phase_removed_id: 1,
					description: 'El problema 1 del programa 1',
					solution: 'La solucion 1 del programa 1',
					start_date: 1577883600 * 1000,
					finish_date: 1577884200 * 1000,
					time_for_repair: 10,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 1,
					standard_defects_id: 2,
					phase_added_id: 2,
					phase_removed_id: 3,
					description: 'El problema 2 del programa 1',
					solution: 'La solucion 2 del programa 1',
					start_date: 1577887800 * 1000,
					finish_date: 1577888400 * 1000,
					time_for_repair: 10,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: 2,
					programs_id: 1,
					standard_defects_id: 1,
					phase_added_id: 2,
					phase_removed_id: null,
					description: 'El problema 3 del programa 1',
					solution: null,
					start_date: 1577887800 * 1000,
					finish_date: null * 1000,
					time_for_repair: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},

				// Programa 2 ----------------------------

				{
					defect_log_chained_id: null,
					programs_id: 2,
					standard_defects_id: 3,
					phase_added_id: 1,
					phase_removed_id: 1,
					description: 'El problema 1 del programa 2',
					solution: 'La solucion 1 del programa 2',
					start_date: 1580734800 * 1000,
					finish_date: 1580737500 * 1000,
					time_for_repair: 45,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 2,
					standard_defects_id: 1,
					phase_added_id: 3,
					phase_removed_id: 3,
					description: 'El problema 2 del programa 2',
					solution: 'La solucion 2 del programa 2',
					start_date: 1580821200 * 1000,
					finish_date: 1580823000 * 1000,
					time_for_repair: 30,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 2,
					standard_defects_id: 2,
					phase_added_id: 3,
					phase_removed_id: null,
					description: 'El problema 3 del programa 2',
					solution: null,
					start_date: 1580823000 * 1000,
					finish_date: null * 1000,
					time_for_repair: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},

				// Programa 3 ----------------------------

				{
					defect_log_chained_id: null,
					programs_id: 3,
					standard_defects_id: 9,
					phase_added_id: 4,
					phase_removed_id: 5,
					description: 'El problema 1 del programa 3',
					solution: 'La solucion 1 del programa 3',
					start_date: 1581454200 * 1000,
					finish_date: 1581459600 * 1000,
					time_for_repair: 90,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 3,
					standard_defects_id: 5,
					phase_added_id: 6,
					phase_removed_id: 6,
					description: 'El problema 2 del programa 3',
					solution: 'La solucion 2 del programa 3',
					start_date: 1581454800 * 1000,
					finish_date: 1581455400 * 1000,
					time_for_repair: 10,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},

				// Programa 4 ----------------------------

				{
					defect_log_chained_id: null,
					programs_id: 4,
					standard_defects_id: 6,
					phase_added_id: 1,
					phase_removed_id: 1,
					description: 'El problema 1 del programa 4',
					solution: 'La solucion 1 del programa 4',
					start_date: 1581858000 * 1000,
					finish_date: 1581858900 * 1000,
					time_for_repair: 15,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 4,
					standard_defects_id: 7,
					phase_added_id: 2,
					phase_removed_id: 2,
					description: 'El problema 2 del programa 4',
					solution: 'La solucion 2 del programa 4',
					start_date: 1581861600 * 1000,
					finish_date: 1581862800 * 1000,
					time_for_repair: 20,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},

				{
					defect_log_chained_id: null,
					programs_id: 4,
					standard_defects_id: 9,
					phase_added_id: 5,
					phase_removed_id: null,
					description: 'El problema 3 del programa 4',
					solution: null,
					start_date: 1581879600 * 1000,
					finish_date: null * 1000,
					time_for_repair: null,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: 10,
					programs_id: 4,
					standard_defects_id: 4,
					phase_added_id: 6,
					phase_removed_id: 6,
					description: 'El problema 4 del programa 4',
					solution: 'La solucion 4 del programa 4',
					start_date: 1581881400 * 1000,
					finish_date: 1581885000 * 1000,
					time_for_repair: 60,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('defect_log', null, {})
	}
}
