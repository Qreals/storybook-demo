import 'antd/dist/antd.less';
import '../src/styles/tailwind.css';
import { withHTML } from '@whitespace/storybook-addon-html/react';
import { addParameters, addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

addDecorator(
	withTests({
		results,
	}),
);

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [withHTML];
