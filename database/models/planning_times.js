'use strict'
module.exports = (sequelize, DataTypes) => {
	const planning_time = sequelize.define(
		'planning_times',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			phases_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			programs_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			planning_time: { type: DataTypes.INTEGER, allowNull: false },
			current_time: { type: DataTypes.INTEGER }
		},
		{
			timestamps: true,
			tableName: 'planning_times',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	planning_time.associate = function (models) {
		/*
		 *  Un planning_time tiene una phases (1:1)
		 */
		models.planning_times.belongsTo(models.phases, {
			foreignKey: 'phases_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'phases'
		})

		// Un planning_time tiene un programs (1:M)
		models.planning_times.belongsTo(models.programs, {
			foreignKey: 'programs_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs'
		})
	}

	return planning_time
}
