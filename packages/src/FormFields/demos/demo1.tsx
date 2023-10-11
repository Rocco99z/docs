import React from "react"
import { Form } from "antd"
import { FormInput, FormInputNumber } from "@simba/components"

export default () => {
  return (
    <Form style={{ width: "500px" }}>
      <FormInput.Group>
        <FormInput placeholder='请输入' label='FormInput' name={"input"} />

        <FormInput.Password placeholder='请输入' name='radio' label='FormInput' />

        <FormInput.Search placeholder='请输入' label='FormInput' />

        <FormInput.TextArea placeholder='请输入' label='FormInput' />

        <FormInputNumber placeholder='请输入' label='FormInputNumber' style={{ width: "100%" }} />
      </FormInput.Group>
    </Form>
  )
}
