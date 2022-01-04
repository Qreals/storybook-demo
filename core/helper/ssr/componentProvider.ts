import { FunctionComponent } from 'react';

export class ComponentProvider {
	cached = {};

	add = (name: string, component: FunctionComponent<any>) => {
		Object.assign(this.cached, { [name]: component });
	};

	get = (name: string) => this.cached[name];
}

const componentProvider = new ComponentProvider();

export default componentProvider;
