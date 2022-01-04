import type { Dispatch, SetStateAction } from 'react';

export interface IAddToWishlistPopupProps {
	setShowForgotPassword: Dispatch<SetStateAction<boolean>>;
	setShowWishlist: Dispatch<SetStateAction<boolean>>;
	setShowLoginPopup: Dispatch<SetStateAction<boolean>>;
	setShowSignUp: Dispatch<SetStateAction<boolean>>;
}
