const { prettier } = require('@umijs/fabric');

module.exports = {
	...prettier,
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	useTabs: true,
};
