/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'plannings',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			phases_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: 'phases'
					},
					key: 'id'
				}
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
			planning_time: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			current_time: {
				type: DataTypes.INTEGER,
				allowNull: true
			},
			planning_defect: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			current_defect: {
				type: DataTypes.INTEGER,
				allowNull: true
			}
		},
		{
			sequelize,
			tableName: 'plannings',
			schema: 'public',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
}
