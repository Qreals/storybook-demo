export interface CartItem {
	catalogRefId: string;
	productId: string;
	quantity: number;
	lessonSkuId?: string;
	lessonStoreId?: string;
	commerceType?: string;
	warrantyBaseItem?: string;
	warrantyBaseCommerceItemId?: string;
}

export interface AddToCartOBJ {
	addItemCount: number;
	items: CartItem[];
	warrantyCatalogRefIdSPA?: string;
}
