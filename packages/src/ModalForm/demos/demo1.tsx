import React, { useState } from "react";
import { ModalForm, FormInput } from "@simba/components";
import { Button } from "antd";

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
      width={600}
      trigger={<Button type="primary">打开</Button>}
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
      <FormInput placeholder="请输入" label="FormInput" name={"input"} />

      <FormInput.Password placeholder="请输入" name="radio" label="FormInput" />
    </ModalForm>
  );
};
