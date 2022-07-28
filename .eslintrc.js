module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'airbnb/hooks',
		'prettier',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', 'prettier'],
	rules: {
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
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'import/prefer-default-export': 'off',
		'no-param-reassign': [
			'error',
			{ props: true, ignorePropertyModificationsFor: ['state', 'ctx'] },
		],
		'eslint/naming-convention': [
			'off',
			{
				selector: 'variable',
				format: ['camelCase'],
			},
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
};
