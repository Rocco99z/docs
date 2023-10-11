import React, { useState } from "react";
import { ProTable } from "@simba/components";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default () => {
  const waitTime = (time = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, time);
    });
  };
  return (
    <ProTable
      onChange={() => {
        console.log(2);
      }}
      toolBar={{
        exportProps: {
          api: () => waitTime(1000),
          fileName: "导出数据",
        },
        importProps: {
          name: "file",
          action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          headers: {
            authorization: "authorization-text",
          },
          onChange(info) {
            console.log("info: ", info);
          },
        },
        tabs: {
          activeKey: "tab1",
          items: [
            {
              key: "tab1",
              label: <span>应用</span>,
            },
            {
              key: "tab2",
              label: <span>项目</span>,
            },
            {
              key: "tab3",
              label: <span>文章</span>,
            },
          ],
          onChange(activeKey) {
            console.log("activeKey: ", activeKey);
          },
        },
        extraContent: [
          <Button key="primary" type="primary">
            <PlusOutlined />
            新建
          </Button>,
        ],
      }}
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
      ]}
    />
  );
};
