/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'modules',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			projects_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'projects'
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
			planning_date: {
				type: DataTypes.BIGINT,
				allowNull: false
			},
			start_date: {
				type: DataTypes.BIGINT,
				allowNull: true
			},
			finish_date: {
				type: DataTypes.BIGINT,
				allowNull: true
			}
		},
		{
			sequelize,
			tableName: 'modules',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
