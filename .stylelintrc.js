const { stylelint } = require('@umijs/fabric');

module.exports = {
	...stylelint,
	rules: {
		...stylelint.rules,
		// Add your rules
		'no-duplicate-selectors': null,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'function',
					'if',
					'each',
					'include',
					'mixin',
					'return',
					'else',
					'at-root',
					'use',
					'warn',
					'extend',
					'for',
				],
			},
		],
	},
};
