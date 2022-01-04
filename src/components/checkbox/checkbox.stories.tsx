import React from 'react';
// import { withDesign } from 'storybook-addon-designs';
import type { Story } from '@storybook/react';
import Checkbox, { ICheckboxProps } from './index';

export default {
	title: 'Molecules/Checkbox/Checkbox',
	component: Checkbox,
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

const Template: Story<ICheckboxProps> = (args) => (
	<div>
		<h2>control checkBox</h2>
		<Checkbox {...args} />
		<br />
		<br />
		<div>
			<h2>checkbox collection</h2>
			<div
				className={
					'flex pl-[4px] rounded-md justify-between items-center bg-blue-200 w-[600px]'
				}
			>
				<Checkbox {...args} disabled={true} children={'disabled checkbox'} />
				<br />
				<br />
				<Checkbox {...args} defaultChecked={true} children={'default checked'} />
				<br />
				<br />
				<Checkbox {...args} checked={true} children={'checked checkbox'} />
			</div>
		</div>
	</div>
);

export const checkBox = Template.bind({});
checkBox.storyName = 'Checkbox';
checkBox.args = {
	checked: true,
	defaultChecked: false,
	disabled: false,
};
