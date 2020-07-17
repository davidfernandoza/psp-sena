'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'time_log',
			[
				//  Programa 1 ----------------------------------------------------------------------

				{
					programs_id: 1,
					phases_id: 1,
					start_date: 1577883600,
					delta_time: 30, // (tiempo final - tiempo inicial - interrupcion) / 60
					finish_date: 1577885400,
					interruption: 0,
					comments: 'Detalles del registro 1 para el programa 1',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 1,
					phases_id: 1,
					start_date: 1577886000,
					delta_time: 30, // (tiempo final - tiempo inicial - interrupcion) / 60
					finish_date: 1577887800,
					interruption: 0,
					comments: 'Detalles del registro 2 para el programa 1',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 1,
					phases_id: 2,
					start_date: 1577887800,
					delta_time: 60,
					finish_date: 1577891400,
					interruption: 0,
					comments: 'Detalles del registro 3 para el programa 1',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 1,
					phases_id: 3,
					start_date: 1577891400,
					delta_time: 96,
					finish_date: 1577897160,
					interruption: 0,
					comments: 'Detalles del registro 4 para el programa 1',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 1,
					phases_id: 4,
					start_date: 1577901600,
					delta_time: 60,
					finish_date: 1577905200,
					interruption: 0,
					comments: 'Detalles del registro 5 para el programa 1',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 1,
					phases_id: 5,
					start_date: 1577905200,
					delta_time: 30,
					finish_date: 1577907000,
					interruption: 0,
					comments: 'Detalles del registro 6 para el programa 1',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 1,
					phases_id: 6,
					start_date: 1577907000,
					delta_time: 175,
					finish_date: 1577917500,
					interruption: 0,
					comments: 'Detalles del registro 7 para el programa 1',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},

				//  Programa 2 ----------------------------------------------------------------------

				{
					programs_id: 2,
					phases_id: 1,
					start_date: 1580734800,
					delta_time: 240,
					finish_date: 1580749200,
					interruption: 0,
					comments: 'Detalles del registro 1 para el programa 2',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					phases_id: 1,
					start_date: 1580752800,
					delta_time: 70,
					finish_date: 1580757000,
					interruption: 10,
					comments: 'Detalles del registro 2 para el programa 2',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					phases_id: 2,
					start_date: 1580757000,
					delta_time: 300,
					finish_date: 1580775000,
					interruption: 0,
					comments: 'Detalles del registro 3 para el programa 2',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					phases_id: 3,
					start_date: 1580821200,
					delta_time: 120,
					finish_date: 1580828400,
					interruption: 0,
					comments: 'Detalles del registro 4 para el programa 2',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					phases_id: 4,
					start_date: 1580828400,
					delta_time: 120,
					finish_date: 1580835600,
					interruption: 0,
					comments: 'Detalles del registro 5 para el programa 2',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					phases_id: 4,
					start_date: 1580835600,
					delta_time: 240,
					finish_date: 1580810400,
					interruption: 0,
					comments: 'Detalles del registro 6 para el programa 2',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					phases_id: 5,
					start_date: 1580907600,
					delta_time: 210,
					finish_date: 1580920200,
					interruption: 0,
					comments: 'Detalles del registro 7 para el programa 2',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					phases_id: 6,
					start_date: 1580882400,
					delta_time: 150,
					finish_date: 1580891400,
					interruption: 0,
					comments: 'Detalles del registro 8 para el programa 2',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},

				//  Programa 3 ----------------------------------------------------------------------

				{
					programs_id: 3,
					phases_id: 1,
					start_date: 1581339600,
					delta_time: 180,
					finish_date: 1581350400,
					interruption: 0,
					comments: 'Detalles del registro 1 para el programa 3',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					phases_id: 2,
					start_date: 1581350400,
					delta_time: 60,
					finish_date: 1581354000,
					interruption: 0,
					comments: 'Detalles del registro 2 para el programa 3',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					phases_id: 2,
					start_date: 1581357600,
					delta_time: 210,
					finish_date: 1581370200,
					interruption: 0,
					comments: 'Detalles del registro 3 para el programa 3',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					phases_id: 3,
					start_date: 1581370200,
					delta_time: 30,
					finish_date: 1581372000,
					interruption: 0,
					comments: 'Detalles del registro 4 para el programa 3',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					phases_id: 4,
					start_date: 1581426000,
					delta_time: 210,
					finish_date: 1581438600,
					interruption: 0,
					comments: 'Detalles del registro 5 para el programa 3',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					phases_id: 5,
					start_date: 1581444000,
					delta_time: 180,
					finish_date: 1581454800,
					interruption: 0,
					comments: 'Detalles del registro 6 para el programa 3',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					phases_id: 6,
					start_date: 1581454800,
					delta_time: 90,
					finish_date: 1581460200,
					interruption: 0,
					comments: 'Detalles del registro 7 para el programa 3',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},

				//  Programa 4 ----------------------------------------------------------------------

				{
					programs_id: 4,
					phases_id: 1,
					start_date: 1581858000,
					delta_time: 60,
					finish_date: 1581861600,
					interruption: 0,
					comments: 'Detalles del registro 1 para el programa 4',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 4,
					phases_id: 2,
					start_date: 1581861600,
					delta_time: 60,
					finish_date: 1581865200,
					interruption: 0,
					comments: 'Detalles del registro 2 para el programa 4',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 4,
					phases_id: 3,
					start_date: 1581865200,
					delta_time: 96,
					finish_date: 1581870960,
					interruption: 0,
					comments: 'Detalles del registro 3 para el programa 4',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 4,
					phases_id: 4,
					start_date: 1581876000,
					delta_time: 60,
					finish_date: 1581879600,
					interruption: 0,
					comments: 'Detalles del registro 4 para el programa 4',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 4,
					phases_id: 5,
					start_date: 1581879600,
					delta_time: 30,
					finish_date: 1581881400,
					interruption: 0,
					comments: 'Detalles del registro 5 para el programa 4',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 4,
					phases_id: 6,
					start_date: 1581881400,
					delta_time: 175,
					finish_date: 1581891900,
					interruption: 0,
					comments: 'Detalles del registro 6 para el programa 4',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('time_log', null, {})
	}
}
