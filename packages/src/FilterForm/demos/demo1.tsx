import React from "react";
import {
  FilterForm,
  FormInput,
  FormSelect,
  FormDatePicker,
} from "@simba/components";

export default () => {
  return (
    <FilterForm
      collapsed={true}
      loading
      labelWidth="90"
      onFinish={(value: any) => {
        console.log(value);
      }}
      onReset={() => {
        console.log(1);
      }}
    >
      <FormInput placeholder="请输入" label="FormInput" name="input" span={6} />
      <FormInput
        placeholder="请输入"
        label="FormInput"
        name="input1"
        span={6}
      />
      <FormInput
        placeholder="请输入"
        label="FormInput"
        name="input2"
        span={6}
      />
      <FormSelect
        span={6}
        placeholder="请输入"
        name="FormSelect"
        label="FormSelect"
        options={[
          { value: "1", label: "a" },
          { value: "2", label: "b" },
        ]}
      />
      <FormDatePicker.RangePicker
        name="RangePicker"
        span={12}
        placeholder={["请输入", "请输入"]}
        label="RangePicker"
        style={{ width: "100%" }}
      />
    </FilterForm>
  );
};
