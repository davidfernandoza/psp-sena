'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('plannings', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			phases_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'phases', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			programs_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'programs', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			planning_time: { type: Sequelize.INTEGER, allowNull: false },
			current_time: { type: Sequelize.INTEGER },
			planning_defect: { type: Sequelize.INTEGER, allowNull: false },
			current_defect: { type: Sequelize.INTEGER },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('plannings')
	}
}
