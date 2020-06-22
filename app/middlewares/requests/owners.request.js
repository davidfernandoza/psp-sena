'use strict'

const { join } = require('path')
const Request = require(join(__dirname, './request'))

class OwnersRequests extends Request {
	#errorString = {}
	#entityReposytory

	constructor({
		ProjectsUsersRepository,
		TestReportsRepository,
		EstimatesRepository,
		DefectLogRepository,
		ProjectsRepository,
		ProgramsRepository,
		TimeLogRepository,
		UsersRepository,
		PipRepository,
		JoiValidator,
		ErrorString,
		JWTService,
		Config
	}) {
		super({}, JoiValidator, Config.CSRF_TOKEN, JWTService)
		this.projectsUsersRepository = ProjectsUsersRepository
		this.usersRepository = UsersRepository
		this.programsRepository = ProgramsRepository
		this.defectLogRepository = DefectLogRepository
		this.estimatesRepository = EstimatesRepository
		this.timeLogRepository = TimeLogRepository
		this.projectsRepository = ProjectsRepository
		this.testReportsRepository = TestReportsRepository
		this.pipRepository = PipRepository
		this.#errorString = ErrorString
	}

	//------------------------------------------------------------------------------+

	// Validar si un proyecto le pertenece a un usuario
	async byProject(req, res, next) {
		let idProject = req.params.id

		if (
			req.method != 'GET' &&
			(req.baseUrl == '/api/modules' || req.baseUrl == '/api/users')
		)
			idProject = req.body.projects_id

		const idUser = req.id
		const relationData = await this.projectsUsersRepository.ownerProject(
			idProject,
			idUser
		)
		if (!relationData) throw new Error('ERR403')
		next()
	}

	//------------------------------------------------------------------------------+

	// Validar si un administrador esta en el mismo proyecto que un desarrollador
	async byUser(req, res, next) {
		const idUserFind = req.params.id,
			idUserAdmin = req.id

		// Validar si es el mismo usuari haciendo su propia consulta
		if (idUserFind != idUserAdmin) {
			if (req.rol == 'DEV') throw new Error('ERR403')
		}

		next()
	}

	//------------------------------------------------------------------------------+

	// validar si un programa le pertenece a un usuario
	async byProgram(req, res, next) {
		const idProgram = req.method == 'GET' ? req.params.id : req.body.programs_id
		const program = await this.programsRepository.get({ id: idProgram })
		const idUser = req.id

		// Valida si el programa existe
		if (!program) throw new Error('ERR404')

		if (req.rol == 'DEV') {
			/*
			 * Se valida si el programa del cuerpo le pertencese al usuario
			 * con los metodos put o create,
			 * si es get se valida con el parametro de la url
			 */
			if (program.users_id != idUser) throw new Error('ERR403')

			if (req.method != 'GET') {
				/*
				 * Se valida los modulos que dependen de un programa
				 */
				switch (req.baseUrl) {
					case '/api/time-logs': {
						this.#entityReposytory = 'timeLogRepository'
						break
					}
					case '/api/defect-logs': {
						/*
						 * Se valida si el defecto escalonado le pertenece al usuario
						 */
						if (req.body.defect_log_chained_id) {
							// todo
							const chainedId = req.body.defect_log_chained_id
							const defectLog = await this.defectLogRepository.get({
								id: chainedId
							})

							if (!defectLog) {
								this.#errorString.REQ403.message = this.#errorString.REQ404.message.replace(
									/#1/g,
									'defect_log_chained_id'
								)
								this.#errorString.REQ403.path = 'defect_log_chained_id'
								return super.errorHandle(null, this.#errorString.REQ403)
							} else if (defectLog.programs_id != idProgram) {
								/*
								 * valida que el defecto escalonado sea del nuevo programa
								 */
								this.#errorString.REQ403.message = this.#errorString.REQ403.message.replace(
									/#1/g,
									'defect_log_chained_id is not from the program'
								)
								this.#errorString.REQ403.path = 'programs_id'
								return super.errorHandle(null, this.#errorString.REQ403)
							}
						}
						this.#entityReposytory = 'defectLogRepository'
						break
					}
					case '/api/pip': {
						/*
						 * Validar si ya esta terminado el programa
						 */
						if (!program.delivery_date) {
							this.#errorString.REQ403.message = this.#errorString.REQ403.message.replace(
								/#1/g,
								'program is not complete'
							)
							this.#errorString.REQ403.path = 'programs_id'
							return super.errorHandle(null, this.#errorString.REQ403)
						}
						this.#entityReposytory = 'pipRepository'
						break
					}
					case '/api/test-reports': {
						/*
						 * Validar si el numero de test ya existe
						 */
						const testRepository = await this.testReportsRepository.getAll({
							query: { where: { test_number: req.body.test_number } }
						})
						this.#errorString.REQ403EXT.message = this.#errorString.REQ403EXT.message.replace(
							/#1/g,
							'test report'
						)

						if (testRepository) {
							if (req.method == 'POST' && testRepository.length > 0)
								return super.errorHandle(null, this.#errorString.REQ403EXT)
							else if (req.method == 'PUT' && testRepository.length > 1)
								return super.errorHandle(null, this.#errorString.REQ403EXT)
						}

						this.#entityReposytory = 'testReportsRepository'
						break
					}
					default:
						throw new Error('ERR404')
				}

				// Validacion de actualizacion
				if (req.method == 'PUT') {
					/*
					 * Se valida que el programa que se llama a editar, le pertenesca al usuario
					 * por medio del parametro de url
					 */

					const getByProgram = {
							includeEntity: 'programs',
							includeAlias: 'programs',
							includeRequired: true,
							includeWhere: { users_id: idUser }, // id del usuario
							where: { id: req.params.id }, // id del programa
							type: 'one'
						},
						dataUpdate = await this[this.#entityReposytory].getByInclude(
							getByProgram
						)

					if (!dataUpdate) throw new Error('ERR404')
				}
			}
		} else {
			/*
			 * Valida si al ADMIN le pertenece el proyecto padre del programa para poder verlo
			 */
			const dataProject = await this.projectsRepository.getAllByUser(
				program.users_id,
				idUser
			)
			if (!dataProject) throw new Error('ERR403')
		}

		next()
	}

	// -----------------------------------------------------------------------

	// Validacion de pertenencia de recurso, por medio de la organizacion.
	async byOrganization(req, res, next) {
		let idUser = req.params.id

		// Validacion de pertenencia del usuario en la organizacion, para gregarle o quitarle un proyecto
		if (
			req.method != 'GET' &&
			(req.route.path == '/add-project' || req.route.path == '/remove-project')
		)
			idUser = req.body.users_id

		const user = await this.usersRepository.get({ id: idUser })
		if (!user) throw new Error('ERR404')

		// Validacion de estado de trabajo de usuario, siesta sin o con organizacion
		if (user.organizations_id) {
			if (user.organizations_id != req.organization) throw new Error('ERR403')

			/*
			 * Validar si la organizacion que trae el cuerpo es un null y
			 * si es diferente a la del usuario actual
			 */
			if (
				req.body.organizations_id != null &&
				req.body.organizations_id != req.organization
			)
				throw new Error('ERR403')

			// No auto despedirce
			if (!req.body.organizations_id) {
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
		let estimates = await this.estimatesRepository.getAllByOrganization(
			idOrganizations,
			req.body.languages_id,
			req.body.algorithm
		)

		this.#errorString.REQ403EXT.message = this.#errorString.REQ403EXT.message.replace(
			/#1/g,
			'estimate'
		)

		if (estimates) {
			if (req.method == 'PUT') {
				/*
				 * Existe mas de una estimacion
				 */
				if (estimates.length > 1)
					return super.errorHandle(null, this.#errorString.REQ403EXT)

				// Validar si la estimacion le pertenencia de la organizacion
				estimates = await this.estimatesRepository.getByOwner(
					req.params.id,
					idOrganizations
				)
				if (!estimates) throw new Error('ERR403')
			} else {
				return super.errorHandle(null, this.#errorString.REQ403EXT)
			}
		}
		next()
	}
}
module.exports = OwnersRequests
