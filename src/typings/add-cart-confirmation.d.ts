import type {
	IPDPBundle,
	IPDPDetail,
	IPDPRightPrice,
	IProductImag,
	IRichRelevanceProduct,
} from './pdp/pageInfo';

export interface IACCSimpleCart {
	total: string;
	count: string;
	itemCount: number;
}

interface IRichRelevanceProduct {
	apiClientKey: string;
	apiKey: string;
	rid: string;
}

export interface IFinancing {
	showEasyPay?: boolean;
	easyPayAmt?: number;
	easyPayMonths?: number;
	financingTextContent?: string;
	financingLinkText?: string;
	financingLink?: string;
	showLease?: boolean;
	showEstimate?: boolean;
}

export interface IAddToCartConfirmationPageInfo {
	productImages: IProductImag;
	PDPBundle: IPDPBundle;
	PDPRightPrice: IPDPRightPrice;
	PDPDetail: IPDPDetail;
	RichRelevanceProduct: IRichRelevanceProduct;
	ACCSimpleCart: IACCSimpleCart;
	ACCGearCard: IFinancing;
}
