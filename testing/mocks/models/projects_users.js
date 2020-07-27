/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'projects_users',
		{
			projects_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				references: {
					model: {
						tableName: 'projects'
					},
					key: 'id'
				}
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
			}
		},
		{
			sequelize,
			tableName: 'projects_users',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
