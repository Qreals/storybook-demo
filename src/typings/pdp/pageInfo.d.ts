import type { IFooterProps } from '@bc/footer';
import type { IConditionListProps } from '@bc/pdp/condition-list';
import type { IFinancing } from '@bc/pdp/modal/FinancingModal';
import type { IPDPArticleProps } from '@bc/pdp/PDPArticle';
import type { IPDPDescriptionProps } from '@bc/pdp/PDPDescription';
import type { IPDPGiftAndDownloadProps } from '@bc/pdp/PDPGiftAndDownload';
import type { IPDPHelpProps } from '@bc/pdp/PDPHelp';
import type { IPDPNewOrOldModelProps } from '@bc/pdp/PDPNewOrOldModel';
import type { IPDPPromoIconsProps } from '@bc/pdp/PDPPromoIcons';
import type { IPDPReturnPolicyLinkProps } from '@bc/pdp/PDPReturnPolicyLink';
import type { IPDPRightPriceProps } from '@bc/pdp/PDPRightPrice';
import type { IPDPSeeAllProductProps } from '@bc/pdp/PDPSeeAllProduct';
import type { IDigitalDownloadProps } from '@bc/pdp/PDPStoreAndDelivery';
import type { IPDPStyleSelectorProps } from '@bc/pdp/PDPStyleSelector';
import type { IPDPLocatedProps } from '@bc/pdp/PDPUsedLocation';
import type { IPDPDetailProps } from '@components/business-components/pdp/product-detail';
import type { VideoProps } from '@typings/global/video';
import type { ProductImageProps } from '@typings/pdp/gallery';
import type { PDPCTAProps } from '@typings/pdp/pdpCTA';
import type { PDPProtectionItemProps } from '@typings/pdp/pdpProtect';
import type { IReviewProps } from '@typings/pdp/review';
import type { IBreadcrumb } from '@uc/basic/breadcrumb';
import { IPriceConditionProps } from '@uc/basic/price/PriceCondition';

import type { IRichRelevanceKey, IRichRelevanceProps } from '../rich-relevance';
import type { IExpertReviewData } from './expertReview';
export interface PDPPropertySelector {
	propertyHTML: string;
}

export interface PDPPageInfo {
	ExpertReview: IExpertReviewData;
	PDPRightPrice: IPDPRightPriceProps;
	Breadcrumb: IBreadcrumb[];
	PDPSeeAllProduct: IPDPSeeAllProductProps[];
	PDPArticle: IPDPArticleProps;
	productVideos: VideoProps[];
	PDPUsedLocation: IPDPLocatedProps;
	PDPPromoIcons: IPDPPromoIconsProps[];
	PDPProtection: PDPProtectionItemProps[];
	PDPStyleSelector: IPDPStyleSelectorProps;
	RichRelevanceProduct: IRichRelevanceKey;
	PDPReview: IReviewProps;
	conditionList: IConditionListProps;
	productImages: ProductImageProps;
	PDPGiftAndDownload: IPDPGiftAndDownloadProps[];
	PDPCTA: PDPCTAProps;
	Financing: IFinancing;
	PDPBundle: IRichRelevanceProps;
	PDPHelp: IPDPHelpProps;
	Footer: IFooterProps;
	PDPDetail: IPDPDetailProps;
	PDPPropertySelector: PDPPropertySelector;
	PDPNewOrOldModel: IPDPNewOrOldModelProps[];
	PDPDescription: IPDPDescriptionProps;
	StoreAndDelivery: IDigitalDownloadProps;
	PDPReturnPolicyLink: IPDPReturnPolicyLinkProps;
}
