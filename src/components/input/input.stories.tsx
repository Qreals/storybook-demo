import React from 'react';
import Input from './index';
import type { InputProps } from './index';
import { Story } from '@storybook/react';
import { UserOutlined } from '@ant-design/icons';

export default {
	title: 'Molecules/Input',
	component: Input,
	argTypes: {},
	parameters: {
		jest: ['input.test.tsx'],
	},
};

const Template: Story<InputProps> = (args) => (
	<>
		<Input {...args} style={{ width: 200 }} />
		<br />
		<br />
		<Input
			{...args}
			addonBefore="http://"
			addonAfter=".com"
			defaultValue="mysite"
			style={{ width: 200 }}
		/>
		<br />
		<br />
		<Input
			size="large"
			placeholder="large size"
			prefix={<UserOutlined />}
			style={{ width: 200 }}
		/>
		<br />
		<br />
		<Input placeholder="default size" prefix={<UserOutlined />} style={{ width: 200 }} />
		<br />
		<br />
		<Input
			size="small"
			placeholder="small size"
			prefix={<UserOutlined />}
			style={{ width: 200 }}
		/>
	</>
);

export const InputTemplate = Template.bind({});
InputTemplate.storyName = 'Input';
InputTemplate.args = {};
