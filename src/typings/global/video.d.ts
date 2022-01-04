export type VideoType = 'youtube' | 'vimeo';
export interface VideoProps {
	controlPlay?: boolean;
	videoSrc: string;
	type: VideoType;
	description: string;
	imageSrc: string;
	title: string;
}
export type ParVideoProps = Partial<VideoProps>;
