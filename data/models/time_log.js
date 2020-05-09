'use strict'
module.exports = (sequelize, DataTypes) => {
	const time_log = sequelize.define(
		'time_log',
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
			phases_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			start_date: { type: DataTypes.DATE, allowNull: false },
			delta_time: {
				type: DataTypes.DOUBLE,
				allowNull: false,
				isNumeric: true
			},
			pause_date: { type: DataTypes.DATE, allowNull: false },
			interruption: { type: DataTypes.INTEGER, allowNull: false },
			comments: { type: DataTypes.TEXT, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'time_log',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	time_log.associate = function (models) {
		/*
		 * Un time_log tiene un programs (1:1)
		 */
		models.time_log.belongsTo(models.programs, {
			foreignKey: 'programs_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs-2'
		})

		// Un time_log tiene un phases (1:1)
		models.time_log.belongsTo(models.phases, {
			foreignKey: 'phases_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'phases-1'
		})
	}

	return time_log
}
