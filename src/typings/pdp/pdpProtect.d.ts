export interface checkItemProps {
	text: string;
	id: string;
	checked: boolean;
	salePrice: number;
	wasPrice?: number;
}

export interface PDPProtectionItemProps {
	imgSrc: string;
	title: string;
	subTitle?: string;
	promoMessage?: string;
	moreTitle: string;
	type: 'lesson' | 'proCoverage';
	checkArray: checkItemProps[];
}
