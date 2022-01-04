import React from 'react';
import Radio from './index';
import type { RadioProps } from './index';
import { Story } from '@storybook/react';

export default {
	title: 'Molecules/Radios/Radio',
	component: Radio,
	argTypes: {},
	// decorators: [withDesign],
	parameters: {
		jest: ['radio.test.tsx'],
	},
};

const Template: Story<RadioProps> = (args) => {
	return (
		<div>
			<h2>radio collection</h2>
			<Radio {...args} />
		</div>
	);
};

export const RadioTemplate = Template.bind({});
RadioTemplate.storyName = 'Radio';
RadioTemplate.args = {
	children: 'Radio',
};
