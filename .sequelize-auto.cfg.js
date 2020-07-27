module.exports = {
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at'
}

/*
Auto generar modelos de las tablas en base de datos:
 sequelize-auto -o "./testing/mocks/models" -a .sequelize-auto.cfg.js -d psp_dev -h localhost -u postgres -p 5432 -x 123456789 -e postgres
 */
