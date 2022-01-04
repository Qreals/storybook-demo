import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Radio from '../index';
import mountTest from '../../../utils/mount-test';

describe('Radio', () => {
	mountTest('Radio mount unmount', Radio);

	test('it should generate a snapshot', () => {
		const { container } = render(<Radio />);
		expect(container).toMatchSnapshot();
	});

	test('it should tigger change events when value changes', () => {
		const onChange = jest.fn();
		render(<Radio onChange={onChange} />);
		const element = screen.getByRole('radio');
		fireEvent.click(element);
		expect(onChange).toHaveBeenCalledTimes(1);
	});
});
