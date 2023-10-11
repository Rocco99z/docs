import React, { useState } from "react";
import { ModalForm, FormInput } from "@simba/components";
import { Button, Row } from "antd";

export default () => {
  const [loading, setLoading] = useState(false);

  const waitTime = (time = 100) => {
    return new Promise((resolve) => {
      setLoading(true);

      setTimeout(() => {
        resolve(true);
        setLoading(false);
      }, time);
    });
  };
  return (
    <ModalForm
      width={1000}
      trigger={<Button type="primary">栅格布局</Button>}
      title="基本使用"
      loading={loading}
      onOpenChange={(open) => {
        console.log("open: ", open);
      }}
      onFinish={async (values) => {
        await waitTime(1000);
        console.log(values);
      }}
    >
      <Row gutter={[10, 10]}>
        <FormInput
          placeholder="请输入"
          label="FormInput"
          name={"input1"}
          span={12}
        />
        <FormInput
          placeholder="请输入"
          label="FormInput"
          name={"input2"}
          span={12}
        />
        <FormInput
          placeholder="请输入"
          label="FormInput"
          name={"inpu3t"}
          span={24}
          style={{ width: "400px" }}
        />
        <FormInput
          placeholder="请输入"
          label="FormInput"
          name={"input4"}
          span={24}
          style={{ width: "400px" }}
        />

        <FormInput.Password
          placeholder="请输入"
          name="radio"
          label="FormInput"
        />
      </Row>
    </ModalForm>
  );
};
