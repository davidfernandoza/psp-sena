/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'phases',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			name: {
				type: DataTypes.ENUM('PLAN', 'DLD', 'CODE', 'COMPILE', 'UT', 'PM'),
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'phases',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
