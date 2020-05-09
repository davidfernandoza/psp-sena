'use strict'

/* -----------------------------------------------------*/
/* System: 																							*/
/*------------------------------------------------------*/
const { join } = require('path')
const { asClass, asFunction, asValue, createContainer } = require('awilix')
const JoiValidator = require('@hapi/joi')
const StartUp = require(join(__dirname, './startup'))
const Server = require(join(__dirname, './server'))
const RoutesApi = require(join(__dirname, './routes'))
const RoutesWeb = require(join(__dirname, './routes/web'))
const Config = require(join(__dirname, '../config/env'))
const DB = require(join(__dirname, '../data/models'))
const container = createContainer()

/* -----------------------------------------------------*/
/* Helpers:																							*/
/*------------------------------------------------------*/
const { StringHelper } = require(join(__dirname, '../helpers'))

/* -----------------------------------------------------*/
/* Routes: 																							*/
/* -----------------------------------------------------*/

const AuthRoutes = require(join(__dirname, './routes/auth.routes'))
const AlgorithmsRoutes = require(join(__dirname, './routes/algorithms.routes'))
const BasePartsRoutes = require(join(__dirname, './routes/base-parts.routes'))
const DefectLogRoutes = require(join(__dirname, './routes/defect-log.routes'))
const EstimatesNewPartsRoutes = require(join(
	__dirname,
	'./routes/estimates-new-parts.routes'
))
const EstimatesRoutes = require(join(__dirname, './routes/estimates.routes'))
const ExperiencesLanguagesRoutes = require(join(
	__dirname,
	'./routes/experiences-languages.routes'
))
const ExperiencesRoutes = require(join(
	__dirname,
	'./routes/experiences.routes'
))
const ForgotPasswordRoutes = require(join(
	__dirname,
	'./routes/forgot-password.routes'
))
const LanguagesRoutes = require(join(__dirname, './routes/languages.routes'))
const ModulesRoutes = require(join(__dirname, './routes/modules.routes'))
const NewPartsRoutes = require(join(__dirname, './routes/new-parts.routes'))
const PhasesRoutes = require(join(__dirname, './routes/phases.routes'))
const PipRoutes = require(join(__dirname, './routes/pip.routes'))
const PositionsRoutes = require(join(__dirname, './routes/positions.routes'))
const ProgramsRoutes = require(join(__dirname, './routes/programs.routes'))
const ProjectsUsersRoutes = require(join(
	__dirname,
	'./routes/projects-users.routes'
))
const ProjectsRoutes = require(join(__dirname, './routes/projects.routes'))
const ReusablePartsRoutes = require(join(
	__dirname,
	'./routes/reusable-parts.routes'
))
const StandardDefectsRoutes = require(join(
	__dirname,
	'./routes/standard-defects.routes'
))
const TestReportsRoutes = require(join(
	__dirname,
	'./routes/test-reports.routes'
))
const TimeLogRoutes = require(join(__dirname, './routes/time-log.routes'))
const UsersRoutes = require(join(__dirname, './routes/users.routes'))

/* -----------------------------------------------------*/
/* Routes Web: 																							*/
/*------------------------------------------------------*/
const RecoverPasswordWebRoutes = require(join(
	__dirname,
	'./routes/web/recover-password.routes'
))

/* -----------------------------------------------------*/
/* Middlewares: 																				*/
/*------------------------------------------------------*/
const { AuthMiddleware, ErrorHandleMiddleware } = require(join(
	__dirname,
	'./middlewares'
))

/* -----------------------------------------------------*/
/* Politics: 																						*/
/*------------------------------------------------------*/
const { AdminPolitic, DevPolitic } = require(join(
	__dirname,
	'./middlewares/politics'
))

/* -----------------------------------------------------*/
/* Requests: 																						*/
/*------------------------------------------------------*/
const {
	AuthRequest,
	AlgorithmsRequest,
	BasePartsRequest,
	DefectLogRequest,
	EstimatesNewPartsRequest,
	EstimatesRequest,
	ExperiencesLanguagesRequest,
	ExperiencesRequest,
	ForgotPasswordRequest,
	LanguagesRequest,
	ModulesRequest,
	NewPartsRequest,
	PhasesRequest,
	PipRequest,
	PositionsRequest,
	ProgramsRequest,
	ProjectsUsersRequest,
	ProjectsRequest,
	ReusablePartsRequest,
	StandardDefectsRequest,
	TestReportsRequest,
	TimeLogRequest,
	UsersRequest
} = require(join(__dirname, './middlewares/requests'))

/* -----------------------------------------------------*/
/* Auth:				 																				*/
/*------------------------------------------------------*/
const { UsersAuth, TokenAuth } = require(join(__dirname, './controllers/auth'))

/* -----------------------------------------------------*/
/* Requests: 																				*/
/*------------------------------------------------------*/
const {
	AlgorithmsController,
	BasePartsController,
	DefectLogController,
	EstimatesNewPartsController,
	EstimatesController,
	ExperiencesLanguagesController,
	ExperiencesController,
	ForgotPasswordController,
	LanguagesController,
	ModulesController,
	NewPartsController,
	PhasesController,
	PipController,
	PositionsController,
	ProgramsController,
	ProjectsUsersController,
	ProjectsController,
	ReusablePartsController,
	StandardDefectsController,
	TestReportsController,
	TimeLogController,
	UsersController
} = require(join(__dirname, './controllers'))

/* -----------------------------------------------------*/
/* Repositories: 																				*/
/*------------------------------------------------------*/
const {
	AlgorithmsRepository,
	BasePartsRepository,
	DefectLogRepository,
	EstimatesNewPartsRepository,
	EstimatesRepository,
	ExperiencesLanguagesRepository,
	ExperiencesRepository,
	ForgotPasswordRepository,
	LanguagesRepository,
	ModulesRepository,
	NewPartsRepository,
	PhasesRepository,
	PipRepository,
	PositionsRepository,
	ProgramsRepository,
	ProjectsUsersRepository,
	ProjectsRepository,
	ReusablePartsRepository,
	StandardDefectsRepository,
	TestReportsRepository,
	TimeLogRepository,
	TokenBlackListRepository,
	UsersRepository
} = require(join(__dirname, '../data/repositories'))

/* -----------------------------------------------------*/
/* DTOS: 																								*/
/*------------------------------------------------------*/
const {
	AlgorithmsDto,
	BasePartsDto,
	DefectLogDto,
	EstimatesNewPartsDto,
	EstimatesDto,
	ExperiencesLanguagesDto,
	ExperiencesDto,
	ForgotPasswordDto,
	LanguagesDto,
	ModulesDto,
	NewPartsDto,
	PhasesDto,
	PipDto,
	PositionsDto,
	ProgramsDto,
	ProjectsUsersDto,
	ProjectsDto,
	ReusablePartsDto,
	StandardDefectsDto,
	TestReportsDto,
	TimeLogDto,
	TokenBlackListDto,
	UsersDto
} = require(join(__dirname, '../dto'))

/* -----------------------------------------------------*/
/* Services: 																						*/
/*------------------------------------------------------*/
const { JWTService, SmsService, MailService } = require(join(
	__dirname,
	'./services'
))

/* -----------------------------------------------------*/
/* Strings: 																						*/
/*------------------------------------------------------*/
const { DoneString, ErrorString, SmsString } = require(join(
	__dirname,
	'../helpers/strings'
))

/* -----------------------------------------------------*/
/* Registers for inyections:	 													*/
/*------------------------------------------------------*/
container

	/*
	 * System:
	 */
	.register({
		App: asClass(StartUp).singleton(),
		Server: asClass(Server).singleton(),
		Config: asValue(Config),
		DB: asValue(DB)
	})

	/*
	 * Routes:
	 */
	.register({
		RoutesApi: asFunction(RoutesApi).singleton(),
		RoutesWeb: asFunction(RoutesWeb).singleton()
	})
	// API
	.register({
		AuthRoutes: asFunction(AuthRoutes).singleton(),
		AlgorithmsRoutes: asFunction(AlgorithmsRoutes).singleton(),
		BasePartsRoutes: asFunction(BasePartsRoutes).singleton(),
		DefectLogRoutes: asFunction(DefectLogRoutes).singleton(),
		EstimatesNewPartsRoutes: asFunction(EstimatesNewPartsRoutes).singleton(),
		EstimatesRoutes: asFunction(EstimatesRoutes).singleton(),
		ExperiencesLanguagesRoutes: asFunction(
			ExperiencesLanguagesRoutes
		).singleton(),
		ExperiencesRoutes: asFunction(ExperiencesRoutes).singleton(),
		ForgotPasswordRoutes: asFunction(ForgotPasswordRoutes).singleton(),
		LanguagesRoutes: asFunction(LanguagesRoutes).singleton(),
		ModulesRoutes: asFunction(ModulesRoutes).singleton(),
		NewPartsRoutes: asFunction(NewPartsRoutes).singleton(),
		PhasesRoutes: asFunction(PhasesRoutes).singleton(),
		PipRoutes: asFunction(PipRoutes).singleton(),
		PositionsRoutes: asFunction(PositionsRoutes).singleton(),
		ProgramsRoutes: asFunction(ProgramsRoutes).singleton(),
		ProjectsUsersRoutes: asFunction(ProjectsUsersRoutes).singleton(),
		ProjectsRoutes: asFunction(ProjectsRoutes).singleton(),
		ReusablePartsRoutes: asFunction(ReusablePartsRoutes).singleton(),
		StandardDefectsRoutes: asFunction(StandardDefectsRoutes).singleton(),
		TestReportsRoutes: asFunction(TestReportsRoutes).singleton(),
		TimeLogRoutes: asFunction(TimeLogRoutes).singleton(),
		UsersRoutes: asFunction(UsersRoutes).singleton()
	})
	// WEB
	.register({
		RecoverPasswordWebRoutes: asFunction(RecoverPasswordWebRoutes).singleton()
	})

	/*
	 * Helpers:
	 */
	.register({
		StringHelper: asClass(StringHelper).singleton()
	})

	/*
	 * Strings:
	 */
	.register({
		DoneString: asClass(DoneString).singleton(),
		ErrorString: asClass(ErrorString).singleton(),
		SmsString: asClass(SmsString).singleton()
	})

	/*
	 * Services:
	 */
	.register({
		MailService: asClass(MailService).singleton(),
		JWTService: asClass(JWTService).singleton(),
		SmsService: asClass(SmsService).singleton()
	})

	/*
	 * Auth:
	 */
	.register({
		TokenAuth: asClass(TokenAuth).singleton(),
		UsersAuth: asClass(UsersAuth).singleton()
	})

	/*
	 * Controllers:
	 */
	.register({
		AlgorithmsController: asClass(AlgorithmsController).singleton(),
		BasePartsController: asClass(BasePartsController).singleton(),
		DefectLogController: asClass(DefectLogController).singleton(),
		EstimatesNewPartsController: asClass(
			EstimatesNewPartsController
		).singleton(),
		EstimatesController: asClass(EstimatesController).singleton(),
		ExperiencesLanguagesController: asClass(
			ExperiencesLanguagesController
		).singleton(),
		ExperiencesController: asClass(ExperiencesController).singleton(),
		ForgotPasswordController: asClass(ForgotPasswordController).singleton(),
		LanguagesController: asClass(LanguagesController).singleton(),
		ModulesController: asClass(ModulesController).singleton(),
		NewPartsController: asClass(NewPartsController).singleton(),
		PhasesController: asClass(PhasesController).singleton(),
		PipController: asClass(PipController).singleton(),
		PositionsController: asClass(PositionsController).singleton(),
		ProgramsController: asClass(ProgramsController).singleton(),
		ProjectsUsersController: asClass(ProjectsUsersController).singleton(),
		ProjectsController: asClass(ProjectsController).singleton(),
		ReusablePartsController: asClass(ReusablePartsController).singleton(),
		StandardDefectsController: asClass(StandardDefectsController).singleton(),
		TestReportsController: asClass(TestReportsController).singleton(),
		TimeLogController: asClass(TimeLogController).singleton(),
		UsersController: asClass(UsersController).singleton()
	})

	/*
	 * Middlewares:
	 */
	.register({
		AuthMiddleware: asClass(AuthMiddleware).singleton(),
		ErrorHandleMiddleware: asClass(ErrorHandleMiddleware).singleton()
	})

	/*
	 * Politics:
	 */
	.register({
		AdminPolitic: asClass(AdminPolitic).singleton(),
		DevPolitic: asClass(DevPolitic).singleton()
	})

	/*
	 * Requests:
	 */
	.register({
		JoiValidator: asValue(JoiValidator)
	})
	.register({
		AuthRequest: asClass(AuthRequest).singleton(),
		AlgorithmsRequest: asClass(AlgorithmsRequest).singleton(),
		BasePartsRequest: asClass(BasePartsRequest).singleton(),
		DefectLogRequest: asClass(DefectLogRequest).singleton(),
		EstimatesNewPartsRequest: asClass(EstimatesNewPartsRequest).singleton(),
		EstimatesRequest: asClass(EstimatesRequest).singleton(),
		ExperiencesLanguagesRequest: asClass(
			ExperiencesLanguagesRequest
		).singleton(),
		ExperiencesRequest: asClass(ExperiencesRequest).singleton(),
		ForgotPasswordRequest: asClass(ForgotPasswordRequest).singleton(),
		LanguagesRequest: asClass(LanguagesRequest).singleton(),
		ModulesRequest: asClass(ModulesRequest).singleton(),
		NewPartsRequest: asClass(NewPartsRequest).singleton(),
		PhasesRequest: asClass(PhasesRequest).singleton(),
		PipRequest: asClass(PipRequest).singleton(),
		PositionsRequest: asClass(PositionsRequest).singleton(),
		ProgramsRequest: asClass(ProgramsRequest).singleton(),
		ProjectsUsersRequest: asClass(ProjectsUsersRequest).singleton(),
		ProjectsRequest: asClass(ProjectsRequest).singleton(),
		ReusablePartsRequest: asClass(ReusablePartsRequest).singleton(),
		StandardDefectsRequest: asClass(StandardDefectsRequest).singleton(),
		TestReportsRequest: asClass(TestReportsRequest).singleton(),
		TimeLogRequest: asClass(TimeLogRequest).singleton(),
		UsersRequest: asClass(UsersRequest).singleton()
	})

	/*
	 * Repositories:
	 */
	.register({
		AlgorithmsRepository: asClass(AlgorithmsRepository).singleton(),
		BasePartsRepository: asClass(BasePartsRepository).singleton(),
		DefectLogRepository: asClass(DefectLogRepository).singleton(),
		EstimatesNewPartsRepository: asClass(
			EstimatesNewPartsRepository
		).singleton(),
		EstimatesRepository: asClass(EstimatesRepository).singleton(),
		ExperiencesLanguagesRepository: asClass(
			ExperiencesLanguagesRepository
		).singleton(),
		ExperiencesRepository: asClass(ExperiencesRepository).singleton(),
		ForgotPasswordRepository: asClass(ForgotPasswordRepository).singleton(),
		LanguagesRepository: asClass(LanguagesRepository).singleton(),
		ModulesRepository: asClass(ModulesRepository).singleton(),
		NewPartsRepository: asClass(NewPartsRepository).singleton(),
		PhasesRepository: asClass(PhasesRepository).singleton(),
		PipRepository: asClass(PipRepository).singleton(),
		PositionsRepository: asClass(PositionsRepository).singleton(),
		ProgramsRepository: asClass(ProgramsRepository).singleton(),
		ProjectsUsersRepository: asClass(ProjectsUsersRepository).singleton(),
		ProjectsRepository: asClass(ProjectsRepository).singleton(),
		ReusablePartsRepository: asClass(ReusablePartsRepository).singleton(),
		StandardDefectsRepository: asClass(StandardDefectsRepository).singleton(),
		TestReportsRepository: asClass(TestReportsRepository).singleton(),
		TimeLogRepository: asClass(TimeLogRepository).singleton(),
		TokenBlackListRepository: asClass(TokenBlackListRepository).singleton(),
		UsersRepository: asClass(UsersRepository).singleton()
	})

	/*
	 * DTOS:
	 */
	.register({
		AlgorithmsDto: asClass(AlgorithmsDto).singleton(),
		BasePartsDto: asClass(BasePartsDto).singleton(),
		DefectLogDto: asClass(DefectLogDto).singleton(),
		EstimatesNewPartsDto: asClass(EstimatesNewPartsDto).singleton(),
		EstimatesDto: asClass(EstimatesDto).singleton(),
		ExperiencesLanguagesDto: asClass(ExperiencesLanguagesDto).singleton(),
		ExperiencesDto: asClass(ExperiencesDto).singleton(),
		ForgotPasswordDto: asClass(ForgotPasswordDto).singleton(),
		LanguagesDto: asClass(LanguagesDto).singleton(),
		ModulesDto: asClass(ModulesDto).singleton(),
		NewPartsDto: asClass(NewPartsDto).singleton(),
		PhasesDto: asClass(PhasesDto).singleton(),
		PipDto: asClass(PipDto).singleton(),
		PositionsDto: asClass(PositionsDto).singleton(),
		ProgramsDto: asClass(ProgramsDto).singleton(),
		ProjectsUsersDto: asClass(ProjectsUsersDto).singleton(),
		ProjectsDto: asClass(ProjectsDto).singleton(),
		ReusablePartsDto: asClass(ReusablePartsDto).singleton(),
		StandardDefectsDto: asClass(StandardDefectsDto).singleton(),
		TestReportsDto: asClass(TestReportsDto).singleton(),
		TimeLogDto: asClass(TimeLogDto).singleton(),
		TokenBlackListDto: asClass(TokenBlackListDto).singleton(),
		UsersDto: asClass(UsersDto).singleton()
	})

module.exports = container
