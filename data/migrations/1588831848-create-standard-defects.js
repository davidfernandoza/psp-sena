'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('standard_defects', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			name: { type: Sequelize.STRING, allowNull: false },
			type: {
				type: Sequelize.ENUM(
					'DOCUMENTATION',
					'SYNTAX',
					'BUILD',
					'PACKAGE',
					'ASSIGMENT',
					'INTERFACE',
					'CHECKING',
					'DATA',
					'FUNCTION',
					'SYSTEM',
					'ENVIRONMENT'
				),
				allowNull: false
			},
			description: { type: Sequelize.TEXT, allowNull: false },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('standard_defects')
	}
}
