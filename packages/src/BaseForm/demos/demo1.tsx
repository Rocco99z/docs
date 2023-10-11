import React from "react"
import { BaseForm, FormInput } from "@simba/components"

export default () => {
  return (
    <BaseForm style={{ width: "500px" }} labelWidth='120' labelAlign='left' loading>
      <FormInput placeholder='请输入' label='FormInput' name={"input"} />

      <FormInput.Password placeholder='请输入' name='radio' label='FormInput' />

      <FormInput.Search placeholder='请输入' label='FormInput' />
    </BaseForm>
  )
}
