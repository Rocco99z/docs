import React, { useEffect, useMemo } from 'react';
import { Button, Dropdown, Pagination, Space, Table, Tabs } from 'antd';
import { VerticalLeftOutlined, VerticalRightOutlined } from '@ant-design/icons';
import type { TableProps, TabsProps } from 'antd';
import './index.css';

interface ProTableProps extends TableProps<any> {
  className?: string;

  /**
   * @description 表格最后一列 操作按钮
   * @default false
   */
  action?: (record: any) => JSX.Element[];

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
    /**
     * @description 标签页配置
     */
    tabs?: Omit<TabsProps, 'tabBarExtraContent' | 'renderTabBar'>;
    /**
     * @description 工具区右侧 额外的配置
     */
    extraContent?: React.ReactNode;
  };
}

const NewTable: React.FC<ProTableProps> = (props: ProTableProps) => {
  const {
    rowKey,
    className,
    columns: propsColumns,
    action,
    pagination,
    onPageChange,
    toolBar,
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
        width: 80,

        render: (text: string, record: any, index: number) => {
          return (
            <Dropdown
              menu={{
                items: action(record)?.map((item: any, index: number) => ({
                  key: index,
                  label: item,
                })),
              }}
              placement="bottomRight"
              key={`space${index}`}
            >
              <span
                onClick={(e) => e.preventDefault()}
                className="mnotable-action"
              >
                . . .
              </span>
            </Dropdown>
          );
        },
      });
    }
    return tempColumns;
  }, [propsColumns, rest?.dataSource, action]);

  useEffect(() => {
    const liElement = document.querySelector('.ant-pagination-simple-pager');
    const inputValElement = document.querySelector(
      '.ant-select-selection-item',
    );
    if (inputValElement?.textContent) {
      const content = inputValElement.textContent.trim();
      const numberPart = content.split(' ')[0];
      inputValElement.textContent = numberPart;
    }

    if (liElement?.textContent) {
      let textNode = liElement.childNodes[2];

      textNode.nodeValue = `页\xa0\xa0共${Math.ceil(
        pagination?.total / pagination?.pageSize,
      )}页`;
    }
  }, [pagination]);

  return (
    <div className={`${className} new-mno-table`}>
      {toolBar && (
        <div className="toolbar">
          <div style={{ width: '60%' }}>
            {toolBar?.tabs && <Tabs indicatorSize={16} {...toolBar?.tabs} />}
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
      <Table
        {...rest}
        rowKey={rowKey}
        //@ts-ignore
        columns={columns}
        pagination={false}
        rowClassName={(record, index) => {
          if (index % 2 === 0) {
            return 'odd-table-row';
          } else return 'even-table-row';
        }}
      />

      <div className="new-mno-pagination">
        <Button
          className="pre-btn"
          type="text"
          size="small"
          icon={
            <VerticalRightOutlined
              style={{ fontWeight: 900, fontSize: '15px' }}
            />
          }
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
          icon={
            <VerticalLeftOutlined
              style={{ fontWeight: 900, fontSize: '15px' }}
            />
          }
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
        <span>条/页</span>
      </div>
    </div>
  );
};

export default NewTable;
