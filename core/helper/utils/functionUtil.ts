export function afterAdobeDTMLoaded(callback) {
	let timer = Math.random();

	timer = window.setInterval(() => {
		const isAdobeDTMLoaded = window._satellite && window._satellite._container;
		if (isAdobeDTMLoaded) {
			clearInterval(timer);
			if (typeof callback === 'function') {
				callback();
			}
			return false;
		}
	}, 2000);
}
