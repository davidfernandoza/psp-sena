'use strict'
module.exports = (sequelize, DataTypes) => {
	const standard_defects = sequelize.define(
		'standard_defects',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			name: { type: DataTypes.STRING, allowNull: false },
			type: {
				type: DataTypes.ENUM(
					'DOCUMENTATION',
					'SYNTAX',
					'BUILD',
					'PACKAGE',
					'ASSIGMENT',
					'INTERFACE',
					'CHECKING',
					'DATA',
					'FUNCTION',
					'SYSTEM',
					'ENVIRONMENT'
				),
				allowNull: false
			},
			description: { type: DataTypes.TEXT, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'standard_defects',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	standard_defects.associate = function (models) {
		/*
		 * Un standard-defects se registra en muchos defect_log (1:M)
		 */
		models.standard_defects.hasMany(models.defect_log, {
			foreignKey: 'standard_defects_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'defect_log-1'
		})
	}

	return standard_defects
}
