'use strict'
module.exports = (sequelize, DataTypes) => {
	const algorithms = sequelize.define(
		'algorithms',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			name: { type: DataTypes.STRING, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'algorithms',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	algorithms.associate = function (models) {
		/*
		 * Un algorithms se registra en muchos estimates (1:M)
		 */
		models.algorithms.hasMany(models.estimates, {
			foreignKey: 'algorithms_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'estimates-1'
		})
	}

	return algorithms
}
