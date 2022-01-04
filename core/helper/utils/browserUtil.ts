export const getLastLocationPath = (): string => {
	const url = document.location.toString();
	const arrUrl = url.split('//');

	const start = arrUrl[1].indexOf('/');
	let relUrl = arrUrl[1].substring(start);

	relUrl = relUrl.split('?')?.reverse()[0]?.split('/')?.reverse()[0];

	return relUrl;
};

export const readCookie = (name: string): string | null => {
	const nameEQ = `${name}=`;
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return unescape(c.substring(nameEQ.length, c.length));
	}
	return null;
};

export const setCookie = (
	name: string,
	value: string,
	expires?: { toGMTString: () => any } | undefined,
	path?: undefined,
	domain?: undefined,
	secure?: undefined,
) => {
	document.cookie = `${name}=${escape(value)}${
		expires ? `; expires=${expires.toGMTString()}` : ''
	}${path ? `; path=${path}` : '; path=/'}${domain ? `; domain=${domain}` : ''}${
		secure ? '; secure' : ''
	}`;
};
