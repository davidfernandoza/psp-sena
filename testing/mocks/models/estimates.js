/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'estimates',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
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
			algorithm: {
				type: DataTypes.STRING,
				allowNull: false
			},
			organizations_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'organizations'
					},
					key: 'id'
				}
			},
			code_lines: {
				type: DataTypes.DOUBLE,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'estimates',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
