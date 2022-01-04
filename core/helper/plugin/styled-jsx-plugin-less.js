const less = require('less');

module.exports = (css, settings) => {
	if (!css) {
		return false;
	}
	const cssWithPlaceholders = css
		.replace(
			/:\s*%%styled-jsx-placeholder-(\d+)%%/g,
			(_, id) => `: styled-jsx-placeholder-${id}()`,
		)
		.replace(
			/%%styled-jsx-placeholder-(\d+)%%/g,
			(_, id) => `/*%%styled-jsx-placeholder-${id}%%*/`,
		);

	let result;

	less.render(cssWithPlaceholders, settings, (error, output) => {
		if (output) {
			result = output.css;
		} else {
			result = '';
		}
	});

	return result
		.replace(
			/:\s*styled-jsx-placeholder-(\d+)\(\)/g,
			(_, id) => `: %%styled-jsx-placeholder-${id}%%`,
		)
		.replace(
			/\/\*%%styled-jsx-placeholder-(\d+)%%\*\//g,
			(_, id) => `%%styled-jsx-placeholder-${id}%%`,
		)
		.replace(
			/%%styled-jsx-placeholder-(\d+)%%\spx/g,
			(_, id) => `%%styled-jsx-placeholder-${id}%%px`,
		);
};
