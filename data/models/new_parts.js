'use strict'
module.exports = (sequelize, DataTypes) => {
	const new_parts = sequelize.define(
		'new_parts',
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
			name: { type: DataTypes.STRING, allowNull: false },
			planned_lines: { type: DataTypes.INTEGER, allowNull: false },
			number_methods_planned: { type: DataTypes.INTEGER, allowNull: false },
			size_planned: {
				type: DataTypes.ENUM('XS', 'S', 'M', 'L', 'XL'),
				allowNull: false
			},
			current_lines: { type: DataTypes.INTEGER, allowNull: false },
			number_methods_current: { type: DataTypes.INTEGER, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'new_parts',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	new_parts.associate = function (models) {
		/*
		 * Un new_parts tiene un programs (1:1)
		 */
		models.new_parts.belongsTo(models.programs, {
			foreignKey: 'programs_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs-1'
		})

		// Un new_parts tiene muchas programs (1:M)
		models.new_parts.belongsToMany(models.estimates, {
			through: models.estimates_new_parts, // Tabla pivote
			foreignKey: 'new_parts_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'estimates_new_parts-1'
		})
	}

	return new_parts
}
