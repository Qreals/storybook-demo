jest.mock('react-dom', () => {
	const original = jest.requireActual('react-dom');
	return {
		...original,
		createPortal: (node) => node,
	};
});

const observe = jest.fn();
const unobserve = jest.fn();
const disconnect = jest.fn();

// you can also pass the mock implementation
// to jest.fn as an argument
window.IntersectionObserver = jest.fn(() => ({
	observe,
	unobserve,
	disconnect,
}));
window.matchMedia = jest.fn().mockImplementation((query) => {
	return {
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	};
});
