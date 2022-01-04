import React from 'react';
import { render } from '@testing-library/react';

const mountTest = (
	text: string,
	Component: React.ComponentType<any>,
	defaultProps?: any,
	updateProps?: any,
) => {
	it(text, () => {
		expect(() => {
			const { rerender, unmount } = render(<Component {...defaultProps} />);
			rerender(<Component {...updateProps} />);
			unmount();
		}).not.toThrow();
	});
};

export default mountTest;
