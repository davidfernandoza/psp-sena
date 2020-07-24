'use strict'
const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		const salt = await bcrypt.genSalt(10)
		const hash = await bcrypt.hash('123456789', salt)

		return queryInterface.bulkInsert(
			'users',
			[
				{
					// table_id: 1,
					organizations_id: 1,
					first_name: 'David Fernando',
					last_name: 'Torres Zapata',
					email: 'fernando.zapata.live@gmail.com',
					password: hash,
					rol: 'ADMIN',
					phone: '+57-3107148905',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 2,
					organizations_id: 1,
					first_name: 'Juan Camilo',
					last_name: 'Agudelo Franco',
					email: 'jcagudelo42@misena.edu.co',
					password: hash,
					rol: 'DEV',
					phone: '+57-3146432187',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('users', null, {})
	}
}
