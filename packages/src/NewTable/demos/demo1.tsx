import { NewTable } from '@simba/components';
import { Button } from 'antd';
import { useState } from 'react';

export default () => {
  const [page, setPage] = useState({ current: 1, pageSize: 10 });
  // console.log('外部page: ', page);
  return (
    <NewTable
      // loading={navigation.state === 'loading'}
      action={(record: any) => [
        <Button key={'edit'} size="small">
          编辑
        </Button>,
        // <Button
        //   key={'danger'}
        //   size="small"
        //   danger
        //   onClick={() => {
        //     console.log(record);
        //   }}
        // >
        //   删除
        // </Button>,
      ]}
      toolBar={{
        tabs: {
          activeKey: 'tab1',
          items: [
            { key: 'tab1', label: <span>应用</span> },
            { key: 'tab2', label: <span>项目</span> },
            { key: 'tab3', label: <span>文章</span> },
          ],
          onChange(activeKey) {
            console.log('activeKey: ', activeKey);
          },
        },
        extraContent: [
          // <Button key="primary" type="primary">
          //   新建
          // </Button>,
        ],
      }}
      rowKey="key"
      scroll={{ x: 'max-content' }}
      onPageChange={() => {}}
      columns={[
        {
          title: 'Age',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Money',
          dataIndex: 'money',
          key: 'money',
          sorter: true,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Address',
          dataIndex: 'address1',
          key: 'address',
        },
        {
          title: 'Address',
          dataIndex: 'address2',
          key: 'address',
        },
        {
          title: 'Address',
          dataIndex: 'address3',
          key: 'address',
        },
        {
          title: 'Address',
          dataIndex: 'address4',
          key: 'address',
        },
      ]}
      dataSource={[
        {
          key: '1',
          money: '￥300,000.00',
          address: 'New York No. 1 Lake Park',
          address1: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          money: '￥1,256,000.00',
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          money: '￥120,000.00',
          address: 'Sydney No. 1 Lake Park',
        },
        { key: '4', name: 'Joe Black', money: '￥120,000.00' },
        { key: '5', name: 'Joe Black', money: '￥120,000.00' },
        { key: '6', name: 'Joe Black', money: '￥120,000.00' },
        { key: '7', name: 'Joe Black', money: '￥120,000.00' },
        { key: '8', name: 'Joe Black', money: '￥120,000.00' },
        { key: '9', name: 'Joe Black', money: '￥120,000.00' },
        { key: '10', name: 'Joe Black', money: '￥120,000.00' },
      ]}
      pagination={{
        current: page.current,
        pageSize: page.pageSize,
        total: 210221,
      }}
    />
  );
};
