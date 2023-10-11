import React from "react";
import { createField } from "./createField";
import {
  Input,
  Select,
  DatePicker,
  Radio,
  Checkbox,
  Upload,
  InputNumber,
  Cascader,
} from "antd";
import type {
  FormItemProps,
  InputProps,
  SelectProps,
  RadioProps,
  RadioGroupProps,
  CheckboxProps,
  DatePickerProps,
  UploadProps,
  InputNumberProps,
  CascaderProps,
} from "antd";
import type {
  PasswordProps,
  SearchProps,
  TextAreaProps,
  GroupProps,
} from "antd/es/input";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import type { RangePickerProps } from "antd/es/date-picker";
import type { DraggerProps } from "antd/es/upload";

type FormFieldProps<T> = React.FC<
  T & FormItemProps & { span?: number | string }
>;

export const FormInput: FormFieldProps<InputProps> & {
  Password: FormFieldProps<PasswordProps>;
  Group: FormFieldProps<GroupProps>;
  Search: FormFieldProps<SearchProps>;
  TextArea: FormFieldProps<TextAreaProps>;
} = createField(Input) as any;

FormInput.Password = createField(Input.Password);
FormInput.Group = createField(Input.Group);
FormInput.Search = createField(Input.Search);
FormInput.TextArea = createField(Input.TextArea);

export const FormSelect: FormFieldProps<SelectProps> = createField(Select);
export const FormCascader: FormFieldProps<CascaderProps> =
  createField(Cascader);
export const FormInputNumber: FormFieldProps<InputNumberProps> =
  createField(InputNumber);

export const FormRadio: FormFieldProps<RadioProps> & {
  Group: FormFieldProps<RadioGroupProps>;
} = createField(Radio) as any;

FormRadio.Group = createField(Radio.Group);

export const FormCheckbox: FormFieldProps<CheckboxProps> & {
  Group: FormFieldProps<CheckboxGroupProps>;
} = createField(Checkbox) as any;

FormCheckbox.Group = createField(Checkbox.Group);

export const FormDatePicker: FormFieldProps<DatePickerProps> & {
  RangePicker: FormFieldProps<RangePickerProps>;
} = createField(DatePicker) as any;

FormDatePicker.RangePicker = createField(DatePicker.RangePicker);

export const FormDateUpload: FormFieldProps<UploadProps> & {
  Dragger: FormFieldProps<DraggerProps>;
} = createField(Upload) as any;

FormDateUpload.Dragger = createField(Upload.Dragger);
