import React from 'react';
import { RadioGroup } from './index';
import type { RadioGroupProps } from './index';
import { Story } from '@storybook/react';

export default {
	title: 'Molecules/Radios/Radio Group',
	component: RadioGroup,
	argTypes: {},
	// decorators: [withDesign],
	parameters: {
		jest: ['radio.test.tsx'],
	},
};

const GroupTemplate: Story<RadioGroupProps> = (args) => {
	return (
		<div>
			<h2>radio group</h2>
			<RadioGroup {...args} name="radioGroup" defaultValue={'Apple'} />
		</div>
	);
};

export const RadioGroupTemplate = GroupTemplate.bind({});
RadioGroupTemplate.storyName = 'Radio Group';
RadioGroupTemplate.args = {
	options: [
		{ label: 'Apple', value: 'Apple' },
		{ label: 'Pear', value: 'Pear' },
		{ label: 'Orange', value: 'Orange', disabled: false },
	],
};
