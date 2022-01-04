import React from 'react';
// import { withDesign } from 'storybook-addon-designs';
import type { Story } from '@storybook/react';
import { CheckboxGroup, ICheckboxGroupProps } from './index';

export default {
	title: 'Molecules/Checkbox/Checkbox Group',
	component: CheckboxGroup,
	argTypes: {
		children: {
			control: {
				type: 'text',
			},
		},
	},
	parameters: {
		jest: ['checkbox.test.tsx'],
	},
};

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
	{ label: 'Apple', value: 'Apple' },
	{ label: 'Pear', value: 'Pear' },
	{ label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
	{ label: 'Apple', value: 'Apple' },
	{ label: 'Pear', value: 'Pear' },
	{ label: 'Orange', value: 'Orange', disabled: false },
];

function onChange(checkedValues: any) {
	console.log('checked = ', checkedValues);
}

const Template: Story = () => (
	<div>
		<h2>Generate a group of checkboxes from an array.</h2>
		<div className={'bg-blue-200 w-[300px] p-[4px] rounded'}>
			<CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
			<br />
			<br />
			<CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
			<br />
			<br />
			<CheckboxGroup
				options={optionsWithDisabled}
				disabled
				defaultValue={['Apple']}
				onChange={onChange}
			/>
		</div>
	</div>
);

export const checkBoxGroup = Template.bind({});
checkBoxGroup.storyName = 'Checkbox Group';
checkBoxGroup.args = {};
