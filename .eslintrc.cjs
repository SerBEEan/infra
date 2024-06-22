module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.app.json',
	},
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true },
		],
		'react/require-default-props': 'off',
		'import/prefer-default-export': 'off',
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'@typescript-eslint/ban-ts-comment': 'off',
		'consistent-return': 'off',
		'react/jsx-props-no-spreading': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'react/destructuring-assignment': 'off',
		'react/no-unstable-nested-components': 'off',
	},
};
