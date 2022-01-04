import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from '../index';
import mountTest from '../../../utils/mount-test';

describe('Checkbox', () => {
	mountTest('Checkbox mount unmount', Checkbox);

	test('should match snapshot', () => {
		const { container } = render(<Checkbox />);
		expect(container).toMatchSnapshot();
	});

	test('it should render with checked state', () => {
		render(<Checkbox checked={true} />);
		expect(screen.getByRole('checkbox')).toBeChecked();
	});

	test('it should render with disabled state', () => {
		render(<Checkbox disabled checked={true} />);
		expect(screen.getByRole('checkbox')).toBeDisabled();
	});

	test('it should trigger onChange event', () => {
		const onChange = jest.fn();
		render(<Checkbox onChange={onChange} />);
		const element = screen.getByRole('checkbox');
		fireEvent.click(element);
		expect(onChange).toHaveBeenCalledTimes(1);
	});
});
