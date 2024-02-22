module.exports = {
	extends: [
		'airbnb/base',
		'plugin:import/typescript'
	],
	env: {
		node: true,
		es6: true,
		browser: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint'
	],
	overrides: [
		{
			files: ['*.ts'],
			rules: {
				'no-unused-vars': 'off',
				'no-use-before-define': 'off'
			}
		}
	],
	rules: {
		'@typescript-eslint/no-unused-vars': ['warn'],
		'@typescript-eslint/no-useless-constructor': ['error'],

		'no-useless-constructor': 0,
		'no-empty-function': 'warn',
		semi: ['error', 'never'],
		indent: [2, 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'comma-dangle': 0,
		'max-len': ['warn', { code: 250 }],
		'operator-linebreak': [2, 'after'],
		'prefer-destructuring': ['warn', {
			array: false,
			object: false
		}, {
			enforceForRenamedProperties: false
		}],
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'func-names': [2, 'as-needed'],
		'no-underscore-dangle': ['warn', { allowAfterThis: true }],

		'import/prefer-default-export': 0,
		'import/extensions': ['error', 'ignorePackages', {
			'': 'never',
			js: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never'
		}],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

		'no-unused-vars': ['warn'],
		'no-await-in-loop': 0,
		'no-unexpected-multiline': 1,
		'no-lonely-if': 0,
		'no-nested-ternary': 0,
		'class-methods-use-this': 1,
		'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
		'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
		'no-console': ['off', { allow: ['warn', 'error'] }],
		'no-alert': ['warn'],
		'object-shorthand': ['error', 'properties'],
		'no-bitwise': ['error', { int32Hint: true }],
		'no-param-reassign': [2, { props: false }],
		quotes: [2, 'single', { allowTemplateLiterals: true }],
		'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
		'object-curly-spacing': ['warn', 'always'],
		'object-curly-newline': ['error', {
			ObjectExpression: { consistent: true },
			ObjectPattern: { multiline: true },
			ImportDeclaration: 'never',
			ExportDeclaration: { multiline: false, minProperties: 10 }
		}],
		'no-use-before-define': ['error', {
			functions: false,
			classes: true,
			variables: true,
			allowNamedExports: false
		}],
	}
}
