import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../index';
import mountTest from '../../../utils/mount-test';

describe('Input', () => {
	mountTest('Input mount unmount', Input);

	test('it should generate a snapshot', () => {
		const { container } = render(<Input />);
		expect(container).toMatchSnapshot();
	});

	test('it should support size', () => {
		const { container } = render(<Input size="large" />);
		expect(container.querySelector('.ant-input-lg')).toBeTruthy();
		expect(container).toMatchSnapshot();
	});
	test('it should have a suffix', () => {
		const { container } = render(<Input suffix="suffix" />);
		expect(container.querySelector('.ant-input-suffix').innerHTML).toBe('suffix');
	});
	test('it should have a prefix', () => {
		const { container } = render(<Input prefix="prefix" />);
		expect(container.querySelector('.ant-input-prefix').innerHTML).toBe('prefix');
	});
	test('it should trigger onChange event', () => {
		let argumentEventObject;
		let argumentEventObjectValue;
		const onChange = (e) => {
			argumentEventObject = e;
			argumentEventObjectValue = e.target.value;
		};
		const { container } = render(
			<Input allowClear type="text" value={'11'} onChange={onChange} />,
		);
		const element = container.querySelector('.ant-input-clear-icon');
		fireEvent.click(element);
		expect(argumentEventObject.type).toBe('click');
		expect(argumentEventObjectValue).toBe('');
	});
});
