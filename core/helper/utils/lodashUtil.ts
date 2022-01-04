import lodash from 'lodash';

export const isArrayAndNotEmpty = (arr: any[]): boolean => {
	return lodash.isArray(arr) && !lodash.isEmpty(arr);
};
