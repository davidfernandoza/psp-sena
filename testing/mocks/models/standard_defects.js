/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'standard_defects',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			name: {
				type: DataTypes.ENUM(
					'DOCUMENTATION',
					'SYNTAX',
					'BUILD',
					'PACKAGE',
					'ASSIGNMENT',
					'INTERFACE',
					'CHECKING',
					'DATA',
					'FUNCTION',
					'SYSTEM',
					'ENVIRONMENT'
				),
				allowNull: false,
				unique: true
			}
		},
		{
			sequelize,
			tableName: 'standard_defects',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
