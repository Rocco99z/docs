import { MnoTable } from '@simba/components';
import { Button } from 'antd';
import { useState } from 'react';

export default () => {
  const [page, setPage] = useState({ current: 1, pageSize: 10 });
  console.log('page: ', page);
  return (
    <MnoTable
      onReset={() => {
        console.log('清空');
        setPage({ current: 1, pageSize: 10 });
      }}
      action={(record: any) => [
        <Button key={'edit'} size="small">
          编辑
        </Button>,
        <Button
          key={'danger'}
          size="small"
          danger
          onClick={() => {
            console.log(record);
          }}
        >
          删除
        </Button>,
      ]}
      columns={[
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
      ]}
      pagination={{
        current: page.current,
        pageSize: page.pageSize,
        total: 211,
      }}
      onPageChange={(pagination) => {
        console.log('onPageChange: ', pagination);
        setPage({ current: pagination.current, pageSize: pagination.pageSize });
      }}
    />
  );
};
