'use strict'
module.exports = (sequelize, DataTypes) => {
	const programs = sequelize.define(
		'programs',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			users_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			languages_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			modules_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			name: { type: DataTypes.STRING, allowNull: false },
			description: { type: DataTypes.TEXT, allowNull: false },
			total_lines: { type: DataTypes.INTEGER, allowNull: false },
			planning_date: { type: DataTypes.BIGINT, allowNull: false },
			start_date: { type: DataTypes.BIGINT, allowNull: false },
			update_date: { type: DataTypes.BIGINT, allowNull: false },
			delivery_date: { type: DataTypes.BIGINT, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'programs',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	programs.associate = function (models) {
		/*
		 * Un programs se registra en muchos defect_log (1:M)
		 */
		models.programs.hasMany(models.defect_log, {
			foreignKey: 'programs_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'defect_log-1'
		})

		// Un programs se registra en muchos new_parts (1:M)
		models.programs.hasMany(models.new_parts, {
			foreignKey: 'programs_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'new_parts-1'
		})

		// Un programs se registra en muchos pip (1:M)
		models.programs.hasMany(models.pip, {
			foreignKey: 'programs_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'pip-1'
		})

		// Un programs se registra en muchos test_reports (1:M)
		models.programs.hasMany(models.test_reports, {
			foreignKey: 'programs_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'test_reports-1'
		})

		// Un programs se registra en muchos time_log (1:M)
		models.programs.hasMany(models.time_log, {
			foreignKey: 'programs_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'time_log-1'
		})

		// Un programs tiene un users (1:1)
		models.programs.belongsTo(models.users, {
			foreignKey: 'users_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'users-1'
		})

		// Un programs tiene un modules (1:1)
		models.programs.belongsTo(models.languages, {
			foreignKey: 'languages_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'languages-1'
		})

		// Un programs tiene un modules (1:1)
		models.programs.belongsTo(models.modules, {
			foreignKey: 'modules_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'modules-1'
		})

		// Un programs tiene muchas programs (base_parts) (1:M)
		models.programs.belongsToMany(models.programs, {
			through: models.base_parts, // Tabla pivote
			foreignKey: 'programs_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'base_parts-1'
		})

		// Un programs tiene muchas programs (base_parts) (1:M)
		models.programs.belongsToMany(models.programs, {
			through: models.base_parts, // Tabla pivote
			foreignKey: 'programs_base_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'base_parts-2'
		})

		// Un programs tiene muchas programs (reusable_parts) (1:M)
		models.programs.belongsToMany(models.programs, {
			through: models.reusable_parts, // Tabla pivote
			foreignKey: 'programs_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'reusable_parts-1'
		})

		// Un programs tiene muchas programs (reusable_parts) (1:M)
		models.programs.belongsToMany(models.programs, {
			through: models.reusable_parts, // Tabla pivote
			foreignKey: 'programs_reusables_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'reusable_parts-2'
		})
	}

	return programs
}
