/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'time_log',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
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
			phases_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'phases'
					},
					key: 'id'
				}
			},
			start_date: {
				type: DataTypes.BIGINT,
				allowNull: false
			},
			delta_time: {
				type: DataTypes.INTEGER,
				allowNull: true
			},
			finish_date: {
				type: DataTypes.BIGINT,
				allowNull: true
			},
			interruption: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			comments: {
				type: DataTypes.TEXT,
				allowNull: true
			}
		},
		{
			sequelize,
			tableName: 'time_log',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
