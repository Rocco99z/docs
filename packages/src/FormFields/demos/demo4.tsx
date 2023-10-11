import React from "react"
import { Form, Button } from "antd"
import { FormDateUpload } from "@simba/components"
import { InboxOutlined, UploadOutlined } from "@ant-design/icons"

export default () => {
  return (
    <Form style={{ width: "500px" }}>
      <FormDateUpload label='FormDateUpload'>
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </FormDateUpload>

      <FormDateUpload.Dragger label='Dragger'>
        <p className='ant-upload-drag-icon'>
          <InboxOutlined />
        </p>
        <p className='ant-upload-text'>点击或拖拽文件到此区域上传</p>
        <p className='ant-upload-hint'>支持单个或批量上传</p>
      </FormDateUpload.Dragger>
    </Form>
  )
}
