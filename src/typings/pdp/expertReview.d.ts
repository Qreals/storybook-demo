/* eslint-disable camelcase */

export interface IExpertReviewMedia {
	id: string;
	uri: string;
	helpful_votes: number;
	not_helpful_votes: number;
	type: string;
}

export interface IExpertReviewMetric {
	helpful_votes: number;
	not_helpful_votes: number;
	rating: number;
	helpful_score: number;
}

export interface IExpertReviewBadges {
	is_staff_reviewer: boolean;
	is_verified_buyer: boolean;
	is_verified_reviewer: boolean;
}

export interface IExpertReviewProperty {
	key: string;
	label: string;
	type: string;
	value: string[] | string;
}

export interface IExpertReviewDetail {
	comments: string;
	headline: string;
	nickname: string;
	properties: IExpertReviewProperty[];
	locale: string;
	location: string;
	created_date: number;
	updated_date: number;
	bottom_line: string;
	product_page_id: string;
}

export interface IExpertReviewItem {
	ugc_id: number;
	legacy_id: number;
	review_id: number;
	internal_review_id: number;
	details: IExpertReviewDetail;
	badges: IExpertReviewBadges;
	media: IExpertReviewMedia[];
	metrics: IExpertReviewMetric;
}

export interface IExpertReviewComponent {
	QuestionDisplay: string;
	ReviewDisplay: string;
	QuestionSnippet: string;
}

export interface IExpertReviewData {
	page_id: string;
	components: IExpertReviewComponent;
	REVIEW_DISPLAY_LST_TYPE: string;
	style_sheet: string;
	REVIEW_DISPLAY_PAGINATION_TYPE: string;
	api_key: string;
	merchant_group_id: string;
	ENABLE_CONTENT_COLLECTION_MODAL: string;
	merchant_id: string;
	review_wrapper_url: string;
	locale: string;
}
