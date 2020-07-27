/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'types_sizes',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			value: {
				type: DataTypes.DOUBLE,
				allowNull: false
			}
		},
		{
			sequelize,
			tableName: 'types_sizes',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
