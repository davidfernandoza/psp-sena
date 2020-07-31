'use strict'
require('dotenv').config()
const { join } = require('path')

const { NODE_ENV } = process.env
const PRODUCTION = require(join(__dirname, './production'))
const DEVELOPMENT = require(join(__dirname, './development'))

let currentEnv = DEVELOPMENT

if (NODE_ENV === 'production') {
	currentEnv = PRODUCTION
}

module.exports = currentEnv
