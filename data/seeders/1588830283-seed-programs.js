'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'programs',
			[
				{
					users_id: 1,
					languages_id: 1,
					modules_id: 1,
					name: 'Name Ipsum 1',
					description:
						'Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '802014713',
					planning_date: '2020-05-08T05:44:43.938Z',
					start_date: '2020-05-10T05:44:43.941Z',
					update_date: '2020-05-07T05:44:43.942Z',
					delivery_date: '2020-05-09T05:44:43.944Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 2,
					languages_id: 1,
					modules_id: 2,
					name: 'Name Ipsum 2',
					description:
						'Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '815530160',
					planning_date: '2020-05-06T05:44:43.939Z',
					start_date: '2020-05-14T05:44:43.941Z',
					update_date: '2020-05-03T05:44:43.943Z',
					delivery_date: '2020-05-08T05:44:43.944Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 3,
					languages_id: 1,
					modules_id: 3,
					name: 'Name Ipsum 3',
					description:
						'Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '311256324',
					planning_date: '2020-05-10T05:44:43.939Z',
					start_date: '2020-05-07T05:44:43.941Z',
					update_date: '2020-05-06T05:44:43.943Z',
					delivery_date: '2020-05-09T05:44:43.944Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 4,
					languages_id: 2,
					modules_id: 4,
					name: 'Name Ipsum 4',
					description:
						'Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '169439193',
					planning_date: '2020-05-08T05:44:43.940Z',
					start_date: '2020-05-07T05:44:43.941Z',
					update_date: '2020-05-01T05:44:43.943Z',
					delivery_date: '2020-04-30T05:44:43.944Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 5,
					languages_id: 3,
					modules_id: 5,
					name: 'Name Ipsum 5',
					description:
						'Lorem Ipsum 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '798459984',
					planning_date: '2020-05-09T05:44:43.940Z',
					start_date: '2020-05-09T05:44:43.941Z',
					update_date: '2020-05-06T05:44:43.943Z',
					delivery_date: '2020-05-07T05:44:43.944Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 6,
					languages_id: 4,
					modules_id: 6,
					name: 'Name Ipsum 6',
					description:
						'Lorem Ipsum 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '240386870',
					planning_date: '2020-05-13T05:44:43.940Z',
					start_date: '2020-05-08T05:44:43.942Z',
					update_date: '2020-05-08T05:44:43.943Z',
					delivery_date: '2020-05-04T05:44:43.944Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 7,
					languages_id: 1,
					modules_id: 1,
					name: 'Name Ipsum 7',
					description:
						'Lorem Ipsum 7 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '182077295',
					planning_date: '2020-05-05T05:44:43.940Z',
					start_date: '2020-05-03T05:44:43.942Z',
					update_date: '2020-05-03T05:44:43.943Z',
					delivery_date: '2020-05-10T05:44:43.944Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 8,
					languages_id: 1,
					modules_id: 2,
					name: 'Name Ipsum 8',
					description:
						'Lorem Ipsum 8 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '549509165',
					planning_date: '2020-05-08T05:44:43.940Z',
					start_date: '2020-05-04T05:44:43.942Z',
					update_date: '2020-05-02T05:44:43.943Z',
					delivery_date: '2020-05-07T05:44:43.945Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 9,
					languages_id: 2,
					modules_id: 3,
					name: 'Name Ipsum 9',
					description:
						'Lorem Ipsum 9 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '255115485',
					planning_date: '2020-05-07T05:44:43.940Z',
					start_date: '2020-05-08T05:44:43.942Z',
					update_date: '2020-05-02T05:44:43.943Z',
					delivery_date: '2020-05-11T05:44:43.945Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 10,
					languages_id: 3,
					modules_id: 4,
					name: 'Name Ipsum 10',
					description:
						'Lorem Ipsum 10 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '639865431',
					planning_date: '2020-05-06T05:44:43.941Z',
					start_date: '2020-05-10T05:44:43.942Z',
					update_date: '2020-05-06T05:44:43.943Z',
					delivery_date: '2020-05-10T05:44:43.945Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 1,
					languages_id: 4,
					modules_id: 5,
					name: 'Name Ipsum 11',
					description:
						'Lorem Ipsum 11 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '386989311',
					planning_date: '2020-05-10T05:44:43.941Z',
					start_date: '2020-05-04T05:44:43.942Z',
					update_date: '2020-05-11T05:44:43.944Z',
					delivery_date: '2020-05-07T05:44:43.945Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					users_id: 2,
					languages_id: 4,
					modules_id: 6,
					name: 'Name Ipsum 12',
					description:
						'Lorem Ipsum 12 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					total_lines: '545163147',
					planning_date: '2020-05-01T05:44:43.941Z',
					start_date: '2020-05-09T05:44:43.942Z',
					update_date: '2020-05-01T05:44:43.944Z',
					delivery_date: '2020-04-30T05:44:43.945Z',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('programs', null, {})
	}
}
