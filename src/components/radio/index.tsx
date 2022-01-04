import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio as ARadio } from 'antd';

export interface RadioProps {
	children?: any;
	autoFocus?: boolean;
	checked?: boolean;
	defaultChecked?: boolean;
	disabled?: boolean;
	value?: any;
	onChange?: () => void;
}

export interface RadioGroupProps {
	children: any;
	buttonStyle?: 'outline' | 'solid';
	defaultValue?: any;
	disabled: boolean;
	name?: string;
	options: string[] | { label: string; value: string; disabled?: boolean }[];
	optionType?: 'default' | 'button';
	size?: 'large' | 'middle' | 'small';
	value?: any;
	onChange: (e: RadioChangeEvent) => void;
}

function Radio(props: RadioProps): JSX.Element {
	return <ARadio {...props} />;
}

export default Radio;
export const RadioGroup = (props: RadioGroupProps) => <ARadio.Group {...props} />;
