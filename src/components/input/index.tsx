import React from 'react';
import { Input as AInput } from 'antd';
import type { CSSProperties } from 'react';
type SizeType = 'small' | 'middle' | 'large' | undefined;
type LiteralUnion<T extends U, U> = T | (U & {});

export interface InputProps {
	prefixCls?: string;
	size?: SizeType;
	disabled?: boolean;
	defaultValue?: string;
	value?: string;
	maxLength?: number;
	type?: LiteralUnion<
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week',
		string
	>;
	onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
	onChange?: React.KeyboardEventHandler<HTMLInputElement>;
	addonBefore?: React.ReactNode;
	addonAfter?: React.ReactNode;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	allowClear?: boolean;
	bordered?: boolean;
	placeholder?: string;
	style?: CSSProperties;
}

function Input(props: InputProps) {
	return <AInput {...props} />;
}

export default Input;
export const Password = AInput.Password;
