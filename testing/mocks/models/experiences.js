/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'experiences',
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
			positions: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			years_generals: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			years_configuration: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			years_integration: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			years_requirements: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			years_design: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			years_tests: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			years_support: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'experiences',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
