'use strict'

const { join } = require('path')
const Request = require(join(__dirname, './request'))

class OwnersRequests extends Request {
	#projectsUsersRepository = {}
	#usersRepository = {}
	#programsRepository = {}
	#defectLogRepository = {}
	#estimatesRepository = {}
	#errorString = {}
	#timeLogRepository = {}
	#projectsRepository = {}

	constructor({
		ProjectsUsersRepository,
		EstimatesRepository,
		DefectLogRepository,
		ProjectsRepository,
		ProgramsRepository,
		TimeLogRepository,
		UsersRepository,
		JoiValidator,
		ErrorString,
		JWTService,
		Config
	}) {
		super({}, JoiValidator, Config.CSRF_TOKEN, JWTService)
		this.#projectsUsersRepository = ProjectsUsersRepository
		this.#usersRepository = UsersRepository
		this.#programsRepository = ProgramsRepository
		this.#defectLogRepository = DefectLogRepository
		this.#estimatesRepository = EstimatesRepository
		this.#timeLogRepository = TimeLogRepository
		this.#errorString = ErrorString
		this.#projectsRepository = ProjectsRepository
	}

	//------------------------------------------------------------------------------
	// Validar si un proyecto le pertenece
	async byProject(req, res, next) {
		let idProject = req.params.id

		if (
			req.method != 'GET' &&
			(req.baseUrl == '/api/modules' || req.baseUrl == '/api/users')
		)
			idProject = req.body.projects_id

		const idUser = req.id
		const relationData = await this.#projectsUsersRepository.owner(
			idProject,
			idUser
		)
		if (!relationData) throw new Error('ERR403')
		next()
	}

	//------------------------------------------------------------------------------
	// validar si un programa le pertenece a un usuario
	async byProgram(req, res, next) {
		const idProgram = req.method == 'GET' ? req.params.id : req.body.programs_id
		const program = await this.#programsRepository.get(idProgram)
		const idUser = req.id

		if (!program) throw new Error('ERR404')

		if (req.rol == 'DEV') {
			if (program.users_id != idUser) throw new Error('ERR403')

			if (
				req.baseUrl == '/api/defect-logs' ||
				req.baseUrl == '/api/time-logs'
			) {
				/*
				 * le pertenecer el defect log, o el log de tiempos?
				 */
				let dataLog = {}
				if (req.method == 'PUT') {
					if (req.baseUrl == '/api/time-logs') {
						dataLog = await this.#timeLogRepository.getByProgram(
							req.params.id,
							idUser
						)
					} else {
						dataLog = await this.#defectLogRepository.getByProgram(
							req.params.id,
							idUser
						)
					}

					if (!dataLog) throw new Error('ERR404')
				}

				// validacion del defecto escalonado
				if (req.body.defect_log_chained_id) {
					const chainedId = req.body.defect_log_chained_id
					const defectLog = await this.#defectLogRepository.get(chainedId)
					if (!defectLog) throw new Error('ERR404')
					else if (defectLog.programs_id != idProgram) throw new Error('ERR403')
				}
			}
		} else {
			/*
			 * Valida si al admin le pertenece el proyecto padre del programa para poder verlo
			 */
			const dataProject = await this.#projectsRepository.getAllByUser(
				program.users_id,
				idUser
			)
			if (!dataProject) throw new Error('ERR403')
		}

		next()
	}

	// -----------------------------------------------------------------------
	// validacion de pertenencia de recurso, por medio de la organizacion.
	async byOrganization(req, res, next) {
		let idUser = req.params.id

		// Validacion de pertenencia del usuario en la organizacion, para gregarle o quitarle un proyecto
		if (
			req.method != 'GET' &&
			(req.route.path == '/add-project' || req.route.path == '/remove-project')
		)
			idUser = req.body.users_id

		const user = await this.#usersRepository.get(idUser)
		if (!user) throw new Error('ERR404')

		// Validacion de estado de trabajo de usuario, siesta sin o con organizacion
		if (user.organizations_id) {
			if (user.organizations_id != req.organization) throw new Error('ERR403')

			// Validar si la organizacion que trae el cuerpo trae un nullo o un vacio y si es diferente al padre de la organizacion
			if (
				req.body.organizations_id != '' &&
				req.body.organizations_id != null &&
				req.body.organizations_id != req.organization
			)
				throw new Error('ERR403')

			// No auto despedirce
			if (
				req.body.organizations_id == '' ||
				req.body.organizations_id == null
			) {
				if (req.id == idUser) throw new Error('ERR403')
			}
		} else {
			// validar si el admin actual tiene permisos con la organizacion del cuerpo
			if (req.body.organizations_id != req.organization)
				throw new Error('ERR403')
			req.body.organizations_id = req.organization
		}
		next()
	}

	// -----------------------------------------------------------------------
	// Validacion de existencia de estimacion para una organizacion
	async byEstimate(req, res, next) {
		const idOrganizations = req.organization
		let estimates = await this.#estimatesRepository.findOrganization(
			idOrganizations,
			req.body.languages_id,
			req.body.algorithm
		)

		if (estimates) {
			if (req.method == 'PUT') {
				if (estimates.length > 1)
					return super.errorHandle(null, this.#errorString.REQ400EST)

				// Validacion de pertenencia de la organizacion
				estimates = await this.#estimatesRepository.getValidate(
					req.params.id,
					idOrganizations
				)
				if (!estimates) throw new Error('ERR403')
			}
		}
		next()
	}
}
module.exports = OwnersRequests
