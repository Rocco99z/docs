import React from "react"
import { Form } from "antd"
import { FormDatePicker } from "@simba/components"

export default () => {
  return (
    <Form style={{ width: "500px" }}>
      <FormDatePicker placeholder='请输入' label='FormDatePicker' style={{ width: "100%" }} />

      <FormDatePicker.RangePicker
        placeholder={["请输入", "请输入"]}
        label='RangePicker'
        style={{ width: "100%" }}
      />
    </Form>
  )
}
