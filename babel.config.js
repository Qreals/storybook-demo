module.exports = {
	presets: [
		'jest',
		'@babel/preset-react',
		[
			'@babel/preset-env',
			{
				targets: {
					node: true,
				},
				modules: 'auto',
			},
		],
	],
	plugins: [
		'@babel/plugin-transform-react-jsx',
		[
			'@babel/plugin-transform-typescript',
			{
				isTSX: true,
			},
		],
		[
			'@babel/plugin-transform-runtime',
			// {
			//   "useESModules": true
			// }
		],
		'macros',
		[
			'styled-jsx/babel',
			{
				plugins: [require.resolve('./core/helper/plugin/styled-jsx-plugin-less.js')],
			},
		],
	],
};
