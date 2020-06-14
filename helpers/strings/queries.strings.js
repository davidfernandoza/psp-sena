'use strict'

class QueriesString {
	constructor() {
		this.ProjectsRepository = {
			getAllByUser:
				'SELECT p.id, p.name, p.description, p.planning_date, p.start_date, p.finish_date FROM projects AS p INNER JOIN projects_users AS pu ON pu.projects_id = p.id	WHERE pu.users_id = :find AND pu.projects_id = ANY (SELECT pu2.projects_id	FROM projects_users AS pu2 WHERE pu2.users_id = :user);'
		}
		this.ProgramsRepository = {
			getAllByOrganization:
				'select p.id, p.users_id, p.languages_id, p.modules_id, p.name, p.description, p.total_lines, p.planning_date, p.start_date, p.update_date, p.delivery_date, p.created_at, p.updated_at from programs as p inner join modules as m on p.modules_id = m.id inner join projects as pj on m.projects_id = pj.id inner join projects_users as pu on pu.projects_id = pj.id inner join users as u on u.id = pu.users_id inner join organizations as o on o.id = u.organizations_id where o.id = :idOrganization;'
		}
	}
}

module.exports = QueriesString
