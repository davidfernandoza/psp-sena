/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'pip',
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
				},
				unique: true
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			proposals: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			comments: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			date: {
				type: DataTypes.BIGINT,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'pip',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
