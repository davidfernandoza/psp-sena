/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'defect_log',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			defect_log_chained_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: {
						tableName: 'defect_log'
					},
					key: 'id'
				}
			},
			programs_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'programs'
					},
					key: 'id'
				}
			},
			standard_defects_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: {
						tableName: 'standard_defects'
					},
					key: 'id'
				}
			},
			phase_added_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'phases'
					},
					key: 'id'
				}
			},
			phase_removed_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: {
						tableName: 'phases'
					},
					key: 'id'
				}
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			solution: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			start_date: {
				type: DataTypes.BIGINT,
				allowNull: false
			},
			finish_date: {
				type: DataTypes.BIGINT,
				allowNull: true
			},
			time_for_repair: {
				type: DataTypes.INTEGER,
				allowNull: true
			}
		},
		{
			sequelize,
			tableName: 'defect_log',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
