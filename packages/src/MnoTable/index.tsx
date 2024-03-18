/* eslint-disable indent*/
import type { TableProps, TabsProps } from 'antd';
import {
  Space,
  Table,
  Tabs,
  Dropdown,
  Button,
  InputNumber,
  Pagination,
} from 'antd';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  LeftOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined,
  RightOutlined,
  DownOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import './index.css';
import { isNull, throttle } from 'lodash';

interface ProTableProps extends TableProps<any> {
  className?: string;

  /**
   * @description 表格最后一列 操作按钮
   * @default false
   */
  action?: (record: any) => JSX.Element[];
  /**
   * @description 分页器 重置按钮事件
   */
  onReset: () => void;

  /**
   * @description 分页器
   */
  pagination: { pageSize: number; current: number; total: number };
  /**
   * @description 分页器触发事件
   */
  onPageChange: (pagination: { pageSize: number; current: number }) => void;

  /**
   * @description 工具栏区域配置 可配置tabs 导入 导出 另外的操作按钮
   */
  toolBar?: {
    tabs?: Omit<TabsProps, 'tabBarExtraContent' | 'renderTabBar'>;
    /**
     * @description 工具区右侧 额外的配置
     */
    extraContent?: React.ReactNode;
  };
}

const ProTable: React.FC<ProTableProps> = (props: ProTableProps) => {
  const {
    rowKey,
    className,
    columns: propsColumns,
    action,
    toolBar,
    pagination,
    onPageChange,
    onReset,
    ...rest
  } = props;

  const columns = useMemo(() => {
    const tempColumns = [];

    if (propsColumns) {
      const temp = propsColumns?.map((item) => {
        if (!item.render) item.render = (text) => (text ? text : '-');
        return item;
      });
      tempColumns.push(...temp);
    }
    if (action) {
      tempColumns.unshift({
        title: '操作',
        key: 'option',
        fixed: 'left',
        width: 60,
        render: (text: string, record: any, index: number) => {
          return (
            <Space key={`space${index}`}>{action(record)}</Space>

            // <Dropdown
            //   menu={{
            //     items: action(record)?.map((item: any, index: number) => ({
            //       key: index,
            //       label: item,
            //     })),
            //   }}
            //   placement="bottomLeft"
            //   key={`space${index}`}
            // >
            //   <a
            //     onClick={(e) => e.preventDefault()}
            //     className="mnotable-action"
            //   >
            //     ...
            //   </a>
            // </Dropdown>
          );
        },
      });
    }
    return tempColumns;
  }, [propsColumns, rest?.dataSource, action]);

  useEffect(() => {
    const liElement = document.querySelector('.ant-pagination-simple-pager');

    if (liElement?.textContent) {
      let textNode = liElement.childNodes[2];

      textNode.nodeValue = `页 共${Math.ceil(
        pagination?.total / pagination?.pageSize,
      )}页`;
    }
  }, [pagination]);

  return (
    <div className={className}>
      {toolBar && (
        <div className="toolbar">
          <div style={{ width: '60%' }}>
            {toolBar?.tabs && <Tabs {...toolBar?.tabs} />}
          </div>
          <Space
            style={{
              width: '40%',
              justifyContent: 'flex-end',
              overflow: 'hidden',
            }}
          >
            {toolBar?.extraContent}
          </Space>
        </div>
      )}
      {/* @ts-ignore */}
      <Table rowKey={rowKey} columns={columns} {...rest} pagination={false} />

      <div className="mno-pagination-test">
        <Button
          className="pre-btn"
          type="text"
          size="small"
          icon={<VerticalRightOutlined />}
          disabled={pagination?.current <= 1}
          onClick={(e) => {
            e.preventDefault();
            onPageChange({ pageSize: pagination?.pageSize, current: 1 });
          }}
        />
        <Pagination
          simple
          total={pagination?.total}
          current={pagination?.current}
          pageSize={pagination?.pageSize}
          onChange={(page, pageSize) => {
            onPageChange({ pageSize, current: page });
          }}
          showSizeChanger
          showTotal={(total) => `共${total}条`}
          pageSizeOptions={[10, 20, 50]}
        />
        <Button
          type="text"
          className="next-btn"
          icon={<VerticalLeftOutlined />}
          disabled={
            pagination?.current >=
            Math.ceil(pagination?.total / pagination?.pageSize)
          }
          size="small"
          onClick={(e) => {
            e.preventDefault();
            onPageChange({
              pageSize: pagination?.pageSize,
              current: Math.ceil(pagination?.total / pagination?.pageSize),
            });
          }}
        />
        <Button
          className="reset-btn"
          icon={<ReloadOutlined />}
          style={{ marginLeft: '5px' }}
          onClick={(e) => {
            e.preventDefault();
            onReset();
          }}
        />
      </div>
    </div>
  );
};

export default ProTable;
