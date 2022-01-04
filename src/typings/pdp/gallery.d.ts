import type { ParVideoProps } from '@typings/index';

export type GalleySectionType = 'image' | 'video' | 'customer';
export type switchMediaFunction = (
	category: GalleySectionType,
	index: number,
	autoPlay?: boolean,
) => void;

export interface ProductImageProps {
	imageId?: string;
	smallImageSrc: string;
	middleImageSrc: string;
	largeImageSrc: string;
}

export interface CustomProps {
	smallImageSrc: string;
	[propName: string]: any;
}

export interface GalleryPopUpImageProps {
	productImages?: ProductImageProps[];
	customerImages?: CustomProps[];
	switchMedia: switchMediaFunction;
	activeProductImage?: number;
	activeCustomerImage?: number;
}

export interface GalleryPopUpVideoProps {
	productVideos: ParVideoProps[];
	switchMedia: switchMediaFunction;
	activeVideo: number;
}

export interface UseMediaSwitchBack extends GalleryPopUpImageProps, GalleryPopUpVideoProps {
	displayGalleryPopup: boolean;
	activeCategory: GalleySectionType;
	closeGalleryPopup: () => void;
}
