const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	// typescript: { reactDocgen: false },
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@whitespace/storybook-addon-html/register',
		// 'storybook-addon-designs',
		// 'storybook-design-token',
		'@storybook/addon-a11y',
		'@storybook/addon-jest',
		'@storybook/addon-measure',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	core: {
		builder: 'webpack5',
	},
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		// config.entry.push(path.resolve(__dirname, '../src/index.less'));

		config.module.rules.push({
			test: /\.less$/,
			use: [
				// 'style-loader',
				MiniCssExtractPlugin.loader,
				'css-loader',
				{
					loader: 'less-loader',
					options: {
						lessOptions: {
							javascriptEnabled: true,
						},
					},
				},
				{
					loader: 'style-resources-loader',
					options: {
						patterns: [
							path.resolve(__dirname, '../src/styles/variable.less'),
							path.resolve(__dirname, '../src/styles/antd-custom.less'),
						],
						injector: 'append',
					},
				},
			],
		});
		config.plugins.push(new MiniCssExtractPlugin());
		// Return the altered config

		config.resolve.alias = Object.assign(config.resolve.alias, {
			'@utils': path.resolve(__dirname, '../src/utils'),
			'@styles': path.resolve(__dirname, '../src/styles'),
			'@helper': path.resolve(__dirname, '../core/helper'),
			'@uc': path.resolve(__dirname, '../src/components'),
			'@hooks': path.resolve(__dirname, '../src/hooks'),
			'@constants': path.resolve(__dirname, '../src/constants'),
			'@typings': path.resolve(__dirname, '../src/typings'),
			path: require.resolve('path-browserify'),
			crypto: require.resolve('crypto-browserify'),
			stream: require.resolve('stream-browserify'),
		});

		/*config.resolve.fallback = {
			path: false,
		};*/

		return config;
	},
};
