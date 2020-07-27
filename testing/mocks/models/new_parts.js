/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'new_parts',
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
			types_sizes_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'types_sizes'
					},
					key: 'id'
				}
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			planned_lines: {
				type: DataTypes.DOUBLE,
				allowNull: false
			},
			number_methods_planned: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			current_lines: {
				type: DataTypes.DOUBLE,
				allowNull: true
			},
			number_methods_current: {
				type: DataTypes.INTEGER,
				allowNull: true
			}
		},
		{
			sequelize,
			tableName: 'new_parts',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
