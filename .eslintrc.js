// eslint-disable
const fabric = require('@umijs/fabric');

module.exports = {
	...fabric.eslint,
	plugins: [...fabric.eslint.plugins, '@typescript-eslint', 'import', 'prettier'],
	rules: {
		...fabric.eslint.rules,
		'@typescript-eslint/no-unused-expressions': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/method-signature-style': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-redeclare': 'off',
		// Add your rule here
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	extends: [
		// other configs ...
		'eslint-config-prettier',
	],
};
