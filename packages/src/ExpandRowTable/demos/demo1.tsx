import React from "react"
import { ExpandRowTable, ProTable } from "@simba/components"
import type { ColumnType } from "rc-table/es/interface.d"

export default () => {
  return (
    <ProTable
      columns={cloumns}
      scroll={{ x: "max-content" }}
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
      ]}
      expandable={{
        expandedRowRender: (record) => (
          <ExpandRowTable
            columns={expandableCloumns}
            scroll={{ x: "max-content" }}
            dataSource={[
              {
                key: "1",
                name: "John Brown",
                money: "￥300,000.00",
                address: "New York No. 1 Lake Park",
              },
            ]}
          />
        ),
      }}
    />
  )
}
export const expandableCloumns: ColumnType<any>[] = [
  {
    title: "数量",
    dataIndex: "name",
    key: "",
    align: "center",
  },
  {
    title: "商品类型",
    dataIndex: "name",
    key: "",
    align: "center",
  },
  {
    title: "商品规格",
    dataIndex: "name",
    key: "",
    align: "center",
  },
]

export const cloumns: ColumnType<any>[] = [
  {
    title: "订单号",
    dataIndex: "name",
    key: "",
    align: "center",
  },
  {
    title: "订单来源",
    dataIndex: "money",
    key: "money",
    align: "center",
  },
  {
    title: "下单时间",
    dataIndex: "money",
    key: "money",
    align: "center",
  },
  {
    title: "ICCID",
    dataIndex: "address",
    key: "address",
    align: "center",
  },

  {
    title: "支付手段",
    dataIndex: "money",
    key: "money",
    align: "center",
  },
  {
    title: "支付金额",
    dataIndex: "address",
    key: "address",
    align: "center",
  },
  {
    title: "支付状态",
    dataIndex: "money",
    key: "money",
    align: "center",
  },
  {
    title: "订单状态",
    dataIndex: "address",
    key: "address",
    align: "center",
  },
]
