import React from "react"
import { Button } from "antd"
import { BaseForm, FormInput } from "@simba/components"

export default () => {
  return (
    <>
      <BaseForm
        style={{ width: "500px" }}
        submitter={{
          render: () => {
            return (
              <>
                <Button>重置</Button>
                <Button>提交</Button>
              </>
            )
          },
        }}
      >
        <FormInput placeholder='请输入' label='FormInput' name={"input"} />

        <FormInput.Password placeholder='请输入' name='radio' label='FormInput' />
      </BaseForm>

      <div style={{ marginBottom: "20px", borderBottom: "1px solid #f4f6f8" }} />

      <BaseForm style={{ width: "500px" }} submitter={{ searchConfig: { submitText: "提交" } }}>
        <FormInput placeholder='请输入' label='FormInput' name={"input"} />

        <FormInput.Password placeholder='请输入' name='radio' label='FormInput' />
      </BaseForm>
    </>
  )
}
