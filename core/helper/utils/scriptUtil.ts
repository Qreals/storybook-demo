import { ScriptHTMLAttributes, StyleHTMLAttributes } from 'react';

export interface ScriptProps extends ScriptHTMLAttributes<HTMLScriptElement> {
	strategy?: 'afterInteractive' | 'lazyOnload' | 'beforeInteractive';
	id?: string;
	onLoad?: (e?: any) => void;
	onError?: (e?: any) => void;
	children?: React.ReactNode;
}

export interface StyleProps extends StyleHTMLAttributes<HTMLStyleElement> {
	href: string;
	id?: string;
	onLoad?: (e?: any) => void;
	onError?: (e?: any) => void;
	crossOrigin?: string;
}

export const DOMAttributeNames: Record<string, string> = {
	acceptCharset: 'accept-charset',
	className: 'class',
	htmlFor: 'for',
	httpEquiv: 'http-equiv',
	noModule: 'noModule',
};

const cache = new Map();
const loadCache = new Set();

const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadTag = ({
	el,
	onLoad,
	onError,
	src,
	cacheKey,
}: {
	el: HTMLScriptElement | HTMLLinkElement;
	onLoad: (e: any) => void;
	onError: (e: any) => void;
	src: string | undefined;
	cacheKey: string | undefined;
}) => {
	const loadPromise = new Promise<void>((resolve, reject) => {
		el.addEventListener('load', (e) => {
			resolve();
			if (onLoad) {
				onLoad.call(el, e);
			}
		});
		el.addEventListener('error', (e) => {
			reject(e);
		});
	}).catch(function (e) {
		if (onError) {
			onError(e);
		}
	});

	if (src) {
		cache.set(src, loadPromise);
	}
	loadCache.add(cacheKey);
};

const getCacheKey = ({
	id,
	href,
	src,
	onLoad,
	onError,
}: {
	id?: string;
	href?: string;
	src?: string;
	onLoad?: (e?: any) => void;
	onError?: (e?: any) => void;
}) => {
	const cacheKey = id || href || src;

	// cacheKey has already loaded
	if (cacheKey && loadCache.has(cacheKey)) {
		if (onLoad && typeof onLoad === 'function') {
			onLoad();
		}
		return;
	}

	// Contents of this key are already loading/loaded
	if (cache.has(cacheKey)) {
		loadCache.add(cacheKey);
		// Execute onLoad since the key loading has begun
		cache.get(cacheKey).then(onLoad, onError);
		return;
	}
	return cacheKey;
};

export const loadScript = (props: ScriptProps): void => {
	const {
		src,
		id,
		onLoad = () => {
			console.log(`${src} script loaded!`);
		},
		dangerouslySetInnerHTML,
		children = '',
		strategy = 'afterInteractive',
		onError = () => {
			console.error(`${src} script load error!!!`);
		},
	} = props;

	const cacheKey = getCacheKey({ id, src, onLoad, onError });
	if (!cacheKey) {
		return;
	}

	const scriptTag = document.createElement('script');

	loadTag({ el: scriptTag, onError, onLoad, src, cacheKey });

	if (dangerouslySetInnerHTML) {
		scriptTag.innerHTML = dangerouslySetInnerHTML.__html || '';
	} else if (children) {
		scriptTag.textContent =
			typeof children === 'string'
				? children
				: Array.isArray(children)
				? children.join('')
				: '';
	} else if (src) {
		scriptTag.src = src;
	}

	for (const [k, value] of Object.entries(props)) {
		if (value === undefined || ignoreProps.includes(k)) {
			continue;
		}

		const attr = DOMAttributeNames[k] || k.toLowerCase();
		scriptTag.setAttribute(attr, value);
	}

	scriptTag.setAttribute('data-nscript', strategy);

	document.body.appendChild(scriptTag);
};

export function loadStyle(props: StyleProps): void {
	const {
		href,
		id,
		onLoad = () => {
			console.log(`${href} style loaded!`);
		},
		onError = () => {
			console.log(`${href} style load error!`);
		},
	} = props;

	const cacheKey = getCacheKey({ id, href, onLoad, onError });
	if (!cacheKey) {
		return;
	}

	const linkTag = document.createElement('link');

	loadTag({ el: linkTag, onError, onLoad, src: href, cacheKey });

	linkTag.setAttribute('rel', 'stylesheet');
	for (const [k, value] of Object.entries(props)) {
		if (value === undefined || ignoreProps.includes(k)) {
			continue;
		}
		const attr = DOMAttributeNames[k] || k.toLowerCase();
		linkTag.setAttribute(attr, value);
	}

	const head = document.getElementsByTagName('head')[0];
	head.appendChild(linkTag);
}
