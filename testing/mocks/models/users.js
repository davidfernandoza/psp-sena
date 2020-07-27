/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'users',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			organizations_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: {
						tableName: 'organizations'
					},
					key: 'id'
				}
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			rol: {
				type: DataTypes.ENUM('ADMIN', 'DEV'),
				allowNull: false
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			}
		},
		{
			sequelize,
			tableName: 'users',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
