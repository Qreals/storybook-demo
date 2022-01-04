import React from 'react';
import { Checkbox as ACheckbox } from 'antd';
import type { CheckboxOptionType } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

export interface ICheckboxProps {
	children?: JSX.Element | string;
	disabled?: boolean;
	defaultChecked?: boolean;
	onChange?: (e: CheckboxChangeEvent) => {};
	className?: string;
	value?: string;
	checked?: boolean;
}

function Checkbox(props: ICheckboxProps): JSX.Element {
	const {
		children,
		disabled,
		defaultChecked,
		onChange = () => {},
		className,
		value,
		checked,
	} = props;

	return (
		<>
			<div className={`gc-checkbox inline-block ${className}`}>
				<ACheckbox
					disabled={disabled}
					defaultChecked={defaultChecked}
					onChange={onChange}
					value={value}
					checked={checked}
					className="flex items-start"
				>
					{children}
				</ACheckbox>
			</div>
		</>
	);
}

export default Checkbox;

export interface ICheckboxGroupProps {
	disabled?: boolean;
	defaultValue?: string[];
	onChange?: (checkedValue: any) => {};
	name?: string;
	options: CheckboxOptionType[] | string[];
	value?: string[];
}

export const CheckboxGroup = ACheckbox.Group;
