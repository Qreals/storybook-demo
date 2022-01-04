export const showStoreStatus = (
	StoreStatus: boolean,
	shipToStore: boolean,
	isStoreItem?: boolean,
): string => {
	if (StoreStatus) {
		if (isStoreItem) {
			return 'In Stock';
		} else {
			return 'In-stock';
		}
	} // out of stock and can ship to store
	else if (shipToStore) {
		if (isStoreItem) {
			return 'Ship to Store';
		} else {
			return 'Ship';
		}
	} else {
		return 'Out of stock';
	}
};
