module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
	],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'max-len': ['error', { code: 120 }],
		'react/react-in-jsx-scope': 'off',
		'simple-import-sort/imports': 'off',
		'simple-import-sort/exports': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'import/prefer-default-export': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
	},
};
