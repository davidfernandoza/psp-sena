'use strict'
module.exports = (sequelize, DataTypes) => {
	const phases = sequelize.define(
		'phases',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			name: { type: DataTypes.STRING, allowNull: false },
			description: { type: DataTypes.TEXT, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'phases',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	phases.associate = function (models) {
		/*
		 * Un phases se registra en muchos time_log (1:M)
		 */
		models.phases.hasMany(models.time_log, {
			foreignKey: 'phases_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'time_log-1'
		})

		// Un phases se registra en muchos defect_log (1:M
		models.phases.hasMany(models.defect_log, {
			foreignKey: 'phase_added_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'defect_log-1'
		})

		// Un phases se registra en muchos defect_log (1:M
		models.phases.hasMany(models.defect_log, {
			foreignKey: 'phase_removed_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'defect_log-2'
		})
	}

	return phases
}
