'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('base_parts', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			programs_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'programs', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			programs_base_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'programs', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			planned_lines_base: { type: Sequelize.DOUBLE, allowNull: false },
			planned_lines_deleted: { type: Sequelize.DOUBLE, allowNull: false },
			planned_lines_edits: { type: Sequelize.DOUBLE, allowNull: false },
			planned_lines_added: { type: Sequelize.DOUBLE, allowNull: false },
			current_lines_base: { type: Sequelize.DOUBLE },
			current_lines_deleted: { type: Sequelize.DOUBLE },
			current_lines_edits: { type: Sequelize.DOUBLE },
			current_lines_added: { type: Sequelize.DOUBLE },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('base_parts')
	}
}
