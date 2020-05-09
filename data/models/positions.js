'use strict'
module.exports = (sequelize, DataTypes) => {
	const positions = sequelize.define(
		'positions',
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
			tableName: 'positions',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	positions.associate = function (models) {
		/*
		 * Un positions se registra en muchos experiences (1:M)
		 */
		models.positions.hasMany(models.experiences, {
			foreignKey: 'positions_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'experiences-1'
		})
	}

	return positions
}
