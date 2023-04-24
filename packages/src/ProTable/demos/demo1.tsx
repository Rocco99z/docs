import React, { useState } from "react"
import { ProTable } from "@simba/components"
import { Button } from "antd"

export default () => {
  return (
    <ProTable
      index
      action={(record: any) => [
        <Button key={"edit"} size='small'>
          编辑
        </Button>,
        <Button
          key={"danger"}
          size='small'
          danger
          onClick={() => {
            console.log(record)
          }}
        >
          删除
        </Button>,
      ]}
      columns={[
        {
          title: "Age",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Money",
          dataIndex: "money",
          key: "money",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
      ]}
      dataSource={[
        {
          key: "1",
          name: "John Brown",
          money: "￥300,000.00",
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          money: "￥1,256,000.00",
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          money: "￥120,000.00",
          address: "Sydney No. 1 Lake Park",
        },
      ]}
    />
  )
}
