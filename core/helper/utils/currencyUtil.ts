import currency from 'currency.js';

//  convert 10000 => 10,000 or 10000 => $10,000
export const formatCurrency = (value: number | currency, currencySymbol?: string): string => {
	if (!currencySymbol) {
		return currency(value, {
			symbol: '',
		}).format();
	}
	return currency(value, {
		symbol: currencySymbol,
		separator: ',',
		decimal: '.',
	}).format();
};
