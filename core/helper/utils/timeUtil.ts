export function getYearAndMonth(): {
	nowYear: number;
	nowMonth: number;
} {
	const date = new Date();
	const nowYear = date.getFullYear();
	let nowMonth = (date.getMonth() + 1) as any;
	if (nowMonth < 10) {
		nowMonth = `0${nowMonth}`;
	}
	return {
		nowYear,
		nowMonth,
	};
}
