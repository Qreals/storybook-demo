import React from 'react';
import { Button as AButton } from 'antd';
import type { CSSProperties } from 'react';

export interface GCButtonProps {
	type?: 'primary' | 'default';
	children: JSX.Element | string;
	width?: number;
	height?: number;
	ghost?: boolean;
	disabled?: boolean;
	fontSize?: number;
	htmlType?: 'button' | 'reset' | 'submit';
	className?: string;
	onClick?: () => void;
	style?: CSSProperties;
	icon?: React.ReactNode;
	id?: string;
}

function Button(props: GCButtonProps): JSX.Element {
	const {
		type = 'default',
		children,
		width,
		height = 46,
		ghost = false,
		disabled = false,
		htmlType = 'submit',
		fontSize = 14,
		style = {},
		onClick,
		className = '',
		icon,
		id,
	} = props;

	return (
		<>
			<AButton
				disabled={disabled}
				id={id}
				ghost={ghost}
				icon={icon}
				type={type}
				onClick={() => {
					if (onClick && typeof onClick === 'function') {
						onClick();
					}
				}}
				htmlType={htmlType}
				style={{
					width: width !== undefined ? `${width}px` : '100%',
					height: `${height}px`,
					fontSize: `${fontSize}px`,
					...style,
				}}
				className={className}
			>
				{children}
			</AButton>
		</>
	);
}

export default Button;
