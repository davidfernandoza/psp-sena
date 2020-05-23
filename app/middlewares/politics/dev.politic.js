'use strict'
const { join } = require('path')
const Politic = require(join(__dirname, './politic'))

class DevPolitic extends Politic {
	constructor({ Config }) {
		const rol = Config.ROL.DEV
		const authRol = Config.ROL.ATTRIBUTE
		const baseUrl = Config.BASE_API
		const permissions = {
			auth: {
				subRoutes: 'all',
				status: 'enable'
			},
			projects: {
				subRoutes: [
					{
						route: '/by-user/:id',
						method: 'GET',
						status: 'unique',
						authParameter: 'id' // Parametro que inyecto el auth al request
					},
					{
						route: '/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'DELETE',
						status: 'disable'
					}
				]
			},
			modules: {
				subRoutes: [
					{
						route: '/by-project/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'disable'
					}
				]
			},
			users: {
				subRoutes: [
					{
						route: '/',
						method: 'GET',
						status: 'disable'
					},
					{
						route: '/free',
						method: 'GET',
						status: 'disable'
					},
					{
						route: '/by-projects/:id',
						method: 'GET',
						status: 'disable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/add-projects',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'unique',
						authParameter: 'id' // Parametro que inyecto el auth al request
					},
					{
						route: '/password',
						method: 'PATCH',
						status: 'enable'
					},
					{
						route: '/remove-projects',
						method: 'POST',
						status: 'disable'
					}
				]
			},
			languages: {
				subRoutes: [
					{
						route: '/',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'disable'
					}
				]
			},
			'standard-defects': {
				subRoutes: [
					{
						route: '/',
						method: 'GET',
						status: 'enable'
					}
				]
			}
		}
		super(rol, authRol, baseUrl, permissions)
	}

	async validate(req, res, next) {
		const permissions = await super.validate(req)
		if (permissions.status === 200) next()
		else if (permissions.status === 403) throw new Error('ERR403')
		else if (permissions.status === 404) throw new Error('ERR404')
		else throw new Error(permissions.message)
	}
}

module.exports = DevPolitic
