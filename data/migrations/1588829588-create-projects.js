'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('projects', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			name: { type: Sequelize.STRING, allowNull: false },
			description: { type: Sequelize.TEXT, allowNull: false },
			planning_date: { type: Sequelize.DATE, allowNull: false },
			start_date: { type: Sequelize.DATE, allowNull: false },
			finish_date: { type: Sequelize.DATE, allowNull: false },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('projects')
	}
}
