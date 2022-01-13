import React, { ReactNode } from 'react';

export interface SelectProps {
    /**
     * it is best to set a unique ID for each input to verify change events
     */
    id?: string;

    /**
     * please set a label, it really helps with accessibility
     */
    label?: string;

    /**
     * standard onChange that returns the entire event, as normal you can access event.target
     */
    onChange: (event: React.ChangeEvent) => void;

    /**
     * a short piece of text to fill the input before the user interacts
     */
    placeholder?: string;

    /**
     * Icon prefix for the input field
     */
    prefix?: React.ReactNode;

    /**
     * types of input available
     */
    type?: 'text' | 'number' | 'email' | 'tel' | 'password';

    /**
     * you can pass a default value so the input is pre-filled
     */
    value?: string;

    /**
     * please give a descriptive name to the input, it help with accessibility
     */
    name?: string;

    /**
     * the input can use state to react to user interaction
     */
    state?: 'error' | 'confirmed' | 'disabled';

    /**
     * css style prop
     */
    style?: React.CSSProperties;

    /**
     * hides the input text when is true
     */
    inputHidden?: boolean;

    /**
     * shows the hide icon when is true
     */
    hidable?: boolean;

    /**
     * imput width
     */

    width?: string;

    /**
     * error message
     */
    errorMessage?: string;

    /**
     * shows copy icon
     */
    copyable?: boolean;

    /**
     * disables any interaction
     */
    disabled?: boolean;

    options?: OptionProps[];

    onOptionChange?: (option: OptionProps) => void;
    defaultOptionIndex?: number | undefined;
}

export interface OptionProps {
    icon?: ReactNode;
    label: string;
    value: any;
}

export interface LabelProps {
    /**
     * true if the defauktIndex is defined
     */
    hasSelectedIndex: boolean;
}

export interface SelectedItemProps {
    state?: 'error' | 'confirmed' | 'disabled';
}