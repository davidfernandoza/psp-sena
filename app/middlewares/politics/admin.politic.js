'use strict'
const { join } = require('path')
const Politic = require(join(__dirname, './politic'))

class AdminPolitic extends Politic {
	constructor({ Config }) {
		const rol = Config.ROL.ADMIN
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
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'DELETE',
						status: 'enable'
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
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'enable'
					}
				]
			},
			users: {
				subRoutes: [
					{
						route: '/',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/by-projects/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/projects',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'enable'
					},
					{
						route: '/password',
						method: 'PATCH',
						status: 'enable'
					},
					{
						route: '/projects',
						method: 'DELETE',
						status: 'enable'
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
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'PUT',
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

module.exports = AdminPolitic
