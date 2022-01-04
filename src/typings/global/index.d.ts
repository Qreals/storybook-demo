export * from './video';
export * from './window';

export type getChildByNameProps = JSX.Element | undefined;
export type childType = JSX.Element | JSX.Element[];

export interface layoutProps {
	children?: childType;
}
export interface UserLocale {
	currencySymbol: string;
	currencyCode: string;
	countryCode: string;
	isInternational: boolean;
	countryName: string;
}
