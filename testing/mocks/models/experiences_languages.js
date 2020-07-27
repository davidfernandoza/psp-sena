/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'experiences_languages',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			experiences_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'experiences'
					},
					key: 'id'
				}
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
			}
		},
		{
			sequelize,
			tableName: 'experiences_languages',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
