'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class TestReportsController extends Controller {
	constructor({
		TestReportsRepository,
		TestReportsDto,
		Config,
		StringHelper,
		DoneString
	}) {
		super(
			TestReportsRepository,
			TestReportsDto,
			Config,
			StringHelper,
			DoneString
		)
	}
	// Logica diferente al CRUD base aqui:
}

module.exports = TestReportsController
