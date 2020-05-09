'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('projects_users', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			projects_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'projects', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			users_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'users', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('projects_users')
	}
}
