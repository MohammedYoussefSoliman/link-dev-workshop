import React from "react";
import {
  ValidationRule,
  FieldValue,
  FieldValues,
  ValidateResult,
  Control,
} from "react-hook-form";
import { Property } from "csstype";
import { Props, GroupBase } from "react-select";

export type FormValidationRules = {
  required: string | ValidationRule<boolean>;
  pattern: ValidationRule<RegExp>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number>;
  minLength: ValidationRule<number>;
  validate: (
    value: FieldValue<FieldValues>,
  ) => ValidateResult | Promise<ValidateResult>;
};

export interface InputPropsType extends React.InputHTMLAttributes<any> {
  name: string;
  label?: string;
  error?: string;
  width?: Property.Width;
  rounded?: boolean;
}

export type StyledInputProps = {
  error?: boolean;
};

export type InputControllerProps = {
  control: Control<any>;
  validationRules?: Partial<FormValidationRules>;
};

export type OptionType = {
  label: React.ReactNode;
  value: string | number;
};

export interface SelectProps
  extends Props<OptionType, boolean, GroupBase<OptionType>> {
  name: string;
  options: OptionType[];
  label?: React.ReactNode;
  error?: string;
  rounded?: boolean;
  withBorder?: boolean;
}

export interface CommonInputProps {
  name: string;
  label?: string;
  error?: string;
  width?: Property.Width;
}

export type StyledInputWrapperProps = {
  width?: Property.Width;
  error?: boolean;
  rounded?: boolean;
};
