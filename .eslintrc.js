module.exports = {
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'jest',
		'import',
		'simple-import-sort',
		'prettier',
	],
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					['^react', '^@?\\w'],
					['^(entities|features|pages|shared|widgets)(/.*|$)', 'models.gen'],
					['^\\.'],
					['^\\u0000'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
		'jsx-a11y/control-has-associated-label': 0,
		'jsx-a11y/alt-text': 0,
		'react/prop-types': 0,
		'jsx-a11y/label-has-associated-control': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'react/jsx-props-no-spreading': 0,
		'react/require-default-props': 0,
		'jsx-a11y/no-noninteractive-tabindex': 0,
		'react/function-component-definition': [
			0,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'import/prefer-default-export': 'off',
		'no-param-reassign': [
			'error',
			{ props: true, ignorePropertyModificationsFor: ['state', 'draft'] },
		],
		'@typescript-eslint/naming-convention': [
			'off',
			{
				selector: 'variable',
				format: ['camelCase'],
			},
		],
		'@typescript-eslint/no-explicit-any': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
};
