import React from "react";
import { Form } from "antd";
import {
  FormSelect,
  FormRadio,
  FormCheckbox,
  FormCascader,
} from "@simba/components";

export default () => {
  return (
    <Form style={{ width: "500px" }}>
      <FormSelect
        placeholder="请输入"
        label="FormSelect"
        options={[
          { value: "1", label: "a" },
          { value: "2", label: "b" },
        ]}
      />
      <FormCascader
        placeholder="请输入"
        label="FormCascader"
        options={[
          {
            value: "zhejiang",
            label: "Zhejiang",
            children: [
              {
                value: "hangzhou",
                label: "Hangzhou",
              },
            ],
          },
        ]}
      ></FormCascader>
      <FormSelect
        mode="multiple"
        placeholder="请输入"
        label="FormSelect"
        options={[
          { value: "1", label: "a" },
          { value: "2", label: "b" },
          { value: "3", label: "c" },
          { value: "4", label: "d" },
          { value: "5", label: "e" },
        ]}
      />

      <FormRadio.Group
        name="radio"
        label="FormRadio"
        optionType="button"
        options={[
          { label: "item 1", value: "a" },
          { label: "item 2", value: "b" },
          { label: "item 3", value: "c" },
        ]}
      />

      <FormRadio.Group
        name="radio2"
        label="FormRadio"
        options={[
          { label: "item 1", value: "a" },
          { label: "item 2", value: "b" },
          { label: "item 3", value: "c" },
        ]}
      />

      <FormCheckbox.Group
        name="checkbox"
        label="FormCheckbox"
        options={[
          { label: "item 1", value: "a" },
          { label: "item 2", value: "b" },
          { label: "item 3", value: "c" },
        ]}
      />
    </Form>
  );
};
