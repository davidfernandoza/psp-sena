/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'base_parts',
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
			programs_base_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'programs'
					},
					key: 'id'
				}
			},
			planned_lines_base: {
				type: DataTypes.DOUBLE,
				allowNull: false
			},
			planned_lines_deleted: {
				type: DataTypes.DOUBLE,
				allowNull: false
			},
			planned_lines_edits: {
				type: DataTypes.DOUBLE,
				allowNull: false
			},
			planned_lines_added: {
				type: DataTypes.DOUBLE,
				allowNull: false
			},
			current_lines_base: {
				type: DataTypes.DOUBLE,
				allowNull: true
			},
			current_lines_deleted: {
				type: DataTypes.DOUBLE,
				allowNull: true
			},
			current_lines_edits: {
				type: DataTypes.DOUBLE,
				allowNull: true
			},
			current_lines_added: {
				type: DataTypes.DOUBLE,
				allowNull: true
			}
		},
		{
			sequelize,
			tableName: 'base_parts',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
