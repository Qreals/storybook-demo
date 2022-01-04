export const changeNumberAsTwoDecimal = (x: any): string => {
	let fX = parseFloat(x);
	if (Number.isNaN(fX)) {
		console.error('function: changeNumberAsTwoDecimal->parameter error');
		return fX.toString();
	}
	fX = Math.round(x * 100) / 100;
	let sX = fX.toString();
	let posDecimal = sX.indexOf('.');
	if (posDecimal < 0) {
		posDecimal = sX.length;
		sX += '.';
	}
	while (sX.length <= posDecimal + 2) {
		sX += '0';
	}
	return sX;
};
