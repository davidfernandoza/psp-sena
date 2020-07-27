/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'programs',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			users_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'users'
					},
					key: 'id'
				}
			},
			languages_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'languages'
					},
					key: 'id'
				}
			},
			modules_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'modules'
					},
					key: 'id'
				}
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			total_lines: {
				type: DataTypes.DOUBLE,
				allowNull: true
			},
			planning_date: {
				type: DataTypes.BIGINT,
				allowNull: false
			},
			start_date: {
				type: DataTypes.BIGINT,
				allowNull: false
			},
			delivery_date: {
				type: DataTypes.BIGINT,
				allowNull: true
			}
		},
		{
			sequelize,
			tableName: 'programs',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
