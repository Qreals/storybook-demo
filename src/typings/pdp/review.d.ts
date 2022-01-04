interface IReviewMedia {
	caption: string;
	created_date: number;
	headline: string;
	helpful_votes: number;
	id: string;
	nickname: string;
	not_helpful_votes: number;
	rating: number;
	review_id: number;
	type: string;
	uri: string;
}

export interface IReviewComponent {
	QuestionDisplay: string;
	ReviewDisplay: string;
	QuestionSnippet: string;
}

export interface IReviewProps {
	page_id: string;
	components: IReviewComponent;
	REVIEW_DISPLAY_LIST_TYPE: string;
	style_sheet: string;
	REVIEW_DISPLAY_PAGINATION_TYPE: string;
	api_key: string;
	merchant_group_id: string;
	ENABLE_CONTENT_COLLECTION_MODAL: string;
	merchant_id: string;
	review_wrapper_url: string;
	locale: string;
	product_id: string;
}
