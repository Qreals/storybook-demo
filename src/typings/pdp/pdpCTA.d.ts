export type CTAButtonType =
	| 'primary'
	| 'primary_ghost'
	| 'phone'
	| 'chat'
	| 'disabled'
	| 'segmentation';
export interface CTAButton {
	type: CTAButtonType;
	quantity: boolean;
	text: string;
}
export interface PDPCTAProps {
	CTAButtons: CTAButton[];
	inventoryStatus?: string;
	invDetailMessage?: string;
	emailTextTo?: string;
	emailTextBack?: string;
	availableDate?: number;
}
