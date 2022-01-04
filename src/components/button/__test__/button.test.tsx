import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../button';
import mountTest from '../../../utils/mount-test';

describe('Button', () => {
	mountTest('Button mount unmount', Button);

	test('Renders Button with aria-label', () => {
		render(<Button>primary button</Button>);
		expect(screen.getByText('primary button')).toBeDefined();
	});

	test('Test onClick function for button', () => {
		const onClick = jest.fn();
		render(<Button onClick={onClick}>primary button</Button>);
		const element = screen.getByText('primary button');
		fireEvent.click(element);
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
