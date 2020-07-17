'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'estimates',
			[
				{
					languages_id: 1,
					organizations_id: 1,
					algorithm: 'Burbuja',
					code_lines: 28.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 2,
					organizations_id: 1,
					algorithm: 'Arbol',
					code_lines: 21.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 3,
					organizations_id: 1,
					algorithm: 'Arbol Binario',
					code_lines: 90.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 4,
					organizations_id: 1,
					algorithm: 'Busqueda Desendente',
					code_lines: 38.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 5,
					organizations_id: 1,
					algorithm: 'Camino Corto',
					code_lines: 20.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 1,
					organizations_id: 1,
					algorithm: 'Ordenamiento',
					code_lines: 29.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 2,
					organizations_id: 1,
					algorithm: 'Grupo de nodos',
					code_lines: 16.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 3,
					organizations_id: 1,
					algorithm: 'Integracion',
					code_lines: 13.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 4,
					organizations_id: 2,
					algorithm: 'Lista en Pila',
					code_lines: 47.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 5,
					organizations_id: 2,
					algorithm: 'Burbuja',
					code_lines: 11.0,
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
