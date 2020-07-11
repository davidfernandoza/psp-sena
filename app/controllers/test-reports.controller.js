'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class TestReportsController extends Controller {
	constructor({ TestReportsRepository, TestReportsDto, ResponseController }) {
		super(TestReportsRepository, TestReportsDto, ResponseController)
	}

	async getAllByProgram(req, res) {
		await super.getByAttribute({
			attribute: 'programs_id',
			value: req.params.id,
			type: 'all',
			res: res
		})
	}
}

module.exports = TestReportsController
