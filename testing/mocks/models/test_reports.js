/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'test_reports',
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
			test_number: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			test_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			conditions: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			expected_result: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			current_result: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			objective: {
				type: DataTypes.TEXT,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'test_reports',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
