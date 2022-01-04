export interface Country {
	countryCode: string;
	countryName: string;
	currencyCode: string;
}

export interface RegionCountries {
	countries: Country[];
	region: string;
}

export interface CurrencyCode {
	currencyName: string;
	currencyCode: string;
}

export type RegionCountriesType = () => Promise<RegionCountries[]>;

export type CurrencyCodeType = () => Promise<CurrencyCode[]>;
