'use strict'
module.exports = (sequelize, DataTypes) => {
	const base_parts = sequelize.define(
		'base_parts',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			programs_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			programs_base_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			planned_lines_base: { type: DataTypes.DOUBLE, allowNull: false },
			planned_lines_deleted: { type: DataTypes.DOUBLE, allowNull: false },
			planned_lines_edits: { type: DataTypes.DOUBLE, allowNull: false },
			planned_lines_added: { type: DataTypes.DOUBLE, allowNull: false },
			current_lines_base: { type: DataTypes.DOUBLE },
			current_lines_deleted: { type: DataTypes.DOUBLE },
			current_lines_edits: { type: DataTypes.DOUBLE },
			current_lines_added: { type: DataTypes.DOUBLE }
		},
		{
			timestamps: true,
			tableName: 'base_parts',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	base_parts.associate = function (models) {
		/*
		 * Un base_parts tiene un programs_base (1:1)
		 */
		models.base_parts.belongsTo(models.programs, {
			foreignKey: 'programs_base_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs_base'
		})

		// Un base_parts tiene un programs (1:1)
		models.base_parts.belongsTo(models.programs, {
			foreignKey: 'programs_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs'
		})
	}

	return base_parts
}
