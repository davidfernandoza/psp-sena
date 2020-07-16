'use strict'

class QueriesString {
	constructor() {
		this.ProjectsRepository = {
			getAllByUser:
				'SELECT p.id, p.name, p.description, p.planning_date, p.start_date, p.finish_date FROM projects AS p INNER JOIN projects_users AS pu ON pu.projects_id = p.id	WHERE pu.users_id = :find AND pu.projects_id = ANY (SELECT pu2.projects_id	FROM projects_users AS pu2 WHERE pu2.users_id = :user);'
		}
		this.ProgramsRepository = {
			getAllByOrganization:
				'SELECT DISTINCT p.id, p.users_id, p.languages_id, p.modules_id, p.name, p.description, p.total_lines, p.planning_date, p.start_date, p.delivery_date, p.created_at, p.updated_at FROM organizations AS o INNER JOIN users AS u ON o.id = u.organizations_id INNER JOIN projects_users AS pu ON pu.users_id = u.id INNER JOIN projects AS pj ON pu.projects_id = pj.id INNER JOIN modules AS m ON m.projects_id = pj.id INNER JOIN programs AS p ON p.modules_id = m.id WHERE o.id = :idOrganization;'
		}
	}
}

module.exports = QueriesString
