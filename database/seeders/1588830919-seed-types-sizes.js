'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'types_sizes',
			[
				// 1
				{
					name: 'calculation-vs',
					value: 2.34,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 2
				{
					name: 'calculation-s',
					value: 5.13,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 3
				{
					name: 'calculation-m',
					value: 11.25,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				//  4
				{
					name: 'calculation-l',
					value: 24.66,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 5
				{
					name: 'calculation-vl',
					value: 54.04,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 6
				{
					name: 'data-vs',
					value: 2.6,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 7
				{
					name: 'data-s',
					value: 4.79,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 8
				{
					name: 'data-m',
					value: 8.84,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 9
				{
					name: 'data-l',
					value: 16.31,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 10
				{
					name: 'data-vl',
					value: 30.09,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 11
				{
					name: 'i/o-vs',
					value: 9.01,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 12
				{
					name: 'i/o-s',
					value: 12.06,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 13
				{
					name: 'i/o-m',
					value: 16.15,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 14
				{
					name: 'i/o-l',
					value: 21.62,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 15
				{
					name: 'i/o-vl',
					value: 28.93,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 16
				{
					name: 'logic-vs',
					value: 7.55,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 17
				{
					name: 'logic-s',
					value: 10.98,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 18
				{
					name: 'logic-m',
					value: 15.98,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 19
				{
					name: 'logic-l',
					value: 23.25,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 20
				{
					name: 'logic-vl',
					value: 33.83,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 21
				{
					name: 'setup-vs',
					value: 3.88,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 22
				{
					name: 'setup-s',
					value: 5.04,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 23
				{
					name: 'setup-m',
					value: 6.56,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 24
				{
					name: 'setup-l',
					value: 8.53,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 25
				{
					name: 'setup-vl',
					value: 11.09,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 26
				{
					name: 'text-vs',
					value: 3.75,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 27
				{
					name: 'text-s',
					value: 8.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 28
				{
					name: 'text-m',
					value: 17.07,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 29
				{
					name: 'text-l',
					value: 36.41,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				// 30
				{
					name: 'text-vl',
					value: 77.66,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('types_sizes', null, {})
	}
}
