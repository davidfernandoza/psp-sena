module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
		browser: true,
		jest: true
	},
	extends: 'eslint:recommended',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-console': ['error', { allow: ['warn', 'error', 'info'] }]
	}
}
