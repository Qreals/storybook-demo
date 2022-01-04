export * from './addToWishlist';
export * from './cart';
export * from './client';
export * from './condition';
export * from './expertReview';
export * from './gallery';
export * from './pageInfo';
export * from './pdpCTA';
export * from './pdpProtect';
export * from './review';

export interface zipCodeParamProps {
	zipCode: string | number | null;
	lng?: string | null;
	lat?: string | null;
}
