'use strict'
module.exports = (sequelize, DataTypes) => {
	const estimates = sequelize.define(
		'estimates',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			languages_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			algorithms_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			code_lines: { type: DataTypes.INTEGER, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'estimates',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	estimates.associate = function (models) {
		/*
		 * Un estimates se registra en muchos algorithms (1:M)
		 */

		// Un estimates tiene un languages (1:1)
		models.estimates.belongsTo(models.languages, {
			foreignKey: 'languages_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'languages-1'
		})

		// Un estimates tiene un algorithms (1:1)
		models.estimates.belongsTo(models.algorithms, {
			foreignKey: 'algorithms_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'algorithms-1'
		})

		// Un estimates tiene muchas new_parts (1:M)
		models.estimates.belongsToMany(models.new_parts, {
			through: models.estimates_new_parts, // Tabla pivote
			foreignKey: 'estimates_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'new_parts-1'
		})
	}

	return estimates
}
