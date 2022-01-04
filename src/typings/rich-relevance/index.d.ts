export type richRelevancePageType = 'pdp' | 'addToCartConfirmation' | 'homepage';

export interface IRichRelevanceProps {
	placements: string;
	pageType: richRelevancePageType;
	needAddToCart: boolean;
}
export interface IRichRelevanceKey {
	apiKey: string;
	apiClientKey: string;
	rid: string;
}
