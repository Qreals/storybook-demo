export type rateTyping = {
	roundMethod?: number;
	value?: number;
	symbol?: string;
};

export type lcpTyping = {
	frontLoadCoefficient?: number;
};

export type getPDPLayoutType = (segment: string | string[]) => any;
export type getPDPPageInfoType = (skuId: string | string[]) => any;
export type getLCPInfoType = (
	merchantId: string | string[],
	countryCode: string | string[],
) => Promise<lcpTyping>;
export type getRateInfoType = (
	merchantId: string | string[],
	currencyCode: string | string[],
) => Promise<rateTyping>;

export interface Client {
	getPDPLayout: getPDPLayoutType;
	getPDPPageInfo: getPDPPageInfoType;
	getLCPInfo: getLCPInfoType;
	getRateInfo: getRateInfoType;
}
