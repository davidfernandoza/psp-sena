/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'reusable_parts',
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
			programs_reusables_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'programs'
					},
					key: 'id'
				}
			},
			planned_lines: {
				type: DataTypes.DOUBLE,
				allowNull: false
			},
			current_lines: {
				type: DataTypes.DOUBLE,
				allowNull: true
			}
		},
		{
			sequelize,
			tableName: 'reusable_parts',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
