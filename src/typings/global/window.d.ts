import type jQuery from '@types/jquery';

declare global {
	interface Window {
		$: jQuery;
		POWERREVIEWS: {
			display: {
				render(arg: any): void;
			};
		};
		syfClient: (arg: { dApplyOpener: string; dApplyUrl: string }) => void;
		s7jsonResponse: ((arg: any) => void) | null;
		_satellite: any;
		GCI: {
			digitalData: any;
		};
		MFI: {
			MiniCart: {
				refresh(): void;
			};
		};
		embedded_svc: any;
	}
}

// save the export
export {};
