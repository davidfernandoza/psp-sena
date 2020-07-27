/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'forgot_password',
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
				},
				unique: true
			},
			token: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			expiration: {
				type: DataTypes.DATE,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'forgot_password',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
