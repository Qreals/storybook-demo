import componentProvider from '../ssr/componentProvider';
import { childType, getChildByNameProps } from '../../../src/typings/global';
import lodash from 'lodash';
import { createElement } from 'react';

export const createNodes = (componentConfig) => {
	const { component, data } = componentConfig;

	try {
		const { '@type': type, children, disabled, name } = component;

		if (disabled) {
			return null;
		}

		const childrenComponent = children
			? children.map((childComponent) => {
					return createNodes({ component: childComponent, data });
			  })
			: null;

		const componentFromProviderByType = componentProvider.get(type);

		if (!componentFromProviderByType) {
			console.warn('CAN NOT FIND COMPONENT BY NAME/TYPE: ', type);
			return null;
		}

		const props = lodash.omit(component, ['@type', 'children', 'disabled', 'name', 'data']);

		return createElement(
			componentFromProviderByType,
			{ key: type + name, ...props, data: data[type] },
			childrenComponent,
		);
	} catch (error) {
		console.error('create component error  --------->  ', component, data);
		throw new Error('500 error, create component failed!');
	}
};

type Element = HTMLElement | null;

export const isParent = (child: Element, parent: Element): boolean => {
	if (!parent) return false;

	let element: Element = child;

	while (element) {
		if (parent === element) return true;
		element = element.parentElement;
	}

	return false;
};

export const getChildrenByName = (
	name: string,
	children: childType | undefined,
): getChildByNameProps => {
	try {
		if (lodash.isArray(children)) {
			return (children as JSX.Element[]).filter((element) => element?.type?.name === name)[0];
		}

		return (children as JSX.Element)?.type?.name === name
			? (children as JSX.Element)
			: undefined;
	} catch (error) {
		console.error('getChildrenByName error ---->', error);
	}
};
