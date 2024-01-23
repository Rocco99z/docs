/* eslint-disable indent*/
import type { TableProps, TabsProps } from 'antd';
import { Space, Table, Tabs, Dropdown, Button, InputNumber } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import {
  LeftOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined,
  RightOutlined,
  DownOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import './index.css';
import { isNull } from 'lodash';

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
   * @description 分页器 初始pagesize
   */
  initpageSize: number;
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
    initpageSize,
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
        align: 'center',
        fixed: 'left',
        render: (text: string, record: any, index: number) => {
          return (
            <Dropdown
              menu={{
                items: action(record)?.map((item: any, index: number) => ({
                  key: index,
                  label: item,
                })),
              }}
              placement="bottomLeft"
              key={`space${index}`}
            >
              <a
                onClick={(e) => e.preventDefault()}
                style={{ fontSize: '20px', color: '#000' }}
              >
                ...
              </a>
            </Dropdown>
          );
        },
      });
    }
    return tempColumns;
  }, [propsColumns, rest?.dataSource, action]);

  const [paginationData, setPpaginationData] = useState<{
    current: number;
    pageSize: number;
    pageNum: number;
  }>({
    current: pagination?.current,
    pageSize: pagination?.pageSize,
    pageNum: Math.ceil(pagination?.total / pagination?.pageSize),
  });

  useEffect(() => {
    setPpaginationData((pre) => ({
      ...pre,
      pageNum: Math.ceil(pagination?.total / pagination?.pageSize),
    }));
  }, [pagination]);
  const handlePageSizeChange = (e: any) => {
    if (Number(e.key) !== pagination.pageSize) {
      setPpaginationData((pre) => ({
        ...pre,
        pageSize: Number(e.key),
        current: 1,
      }));
      onPageChange?.({
        pageSize: Number(e.key),
        current: 1,
      });
    }
  };
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
      {pagination?.total > 0 && (
        <div className="mno-pagination">
          <Button
            type="text"
            icon={<VerticalRightOutlined />}
            onClick={(e) => {
              e.preventDefault();
              if (paginationData.current !== 1) {
                setPpaginationData((pre) => ({ ...pre, current: 1 }));
                onPageChange({
                  pageSize: paginationData?.pageSize,
                  current: 1,
                });
              }
            }}
          />
          <Button
            type="text"
            icon={<LeftOutlined />}
            onClick={(e) => {
              e.preventDefault();
              const { current } = paginationData;
              const newCurrent = current - 1 < 1 ? 1 : current - 1;
              if (current - 1 > 0) {
                setPpaginationData((pre) => ({ ...pre, current: newCurrent }));

                onPageChange({
                  pageSize: pagination?.pageSize,
                  current: newCurrent,
                });
              }
            }}
          />
          <InputNumber
            min={1}
            controls={false}
            formatter={(value: any) =>
              value ? Math.floor(Number(value)).toString() : ''
            }
            value={paginationData.current}
            onChange={(val: any) => {
              setPpaginationData((pre) => ({ ...pre, current: val }));
            }}
            onBlur={() => {
              if (!isNull(paginationData.current)) {
                if (paginationData.current > paginationData.pageNum) {
                  setPpaginationData((pre) => ({
                    ...pre,
                    current: paginationData?.pageNum,
                  }));
                  onPageChange({
                    pageSize: paginationData?.pageSize,
                    current: paginationData.pageNum,
                  });
                } else if (paginationData.current < 1) {
                  setPpaginationData((pre) => ({
                    ...pre,
                    current: 1,
                  }));
                  onPageChange({
                    pageSize: paginationData?.pageSize,
                    current: 1,
                  });
                } else {
                  onPageChange({
                    pageSize: paginationData?.pageSize,
                    current: paginationData.current,
                  });
                }
              } else {
                setPpaginationData((pre) => ({
                  ...pre,
                  current: 1,
                }));
                onPageChange({
                  pageSize: paginationData?.pageSize,
                  current: 1,
                });
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !isNull(paginationData.current)) {
                if (paginationData.current > paginationData.pageNum) {
                  setPpaginationData((pre) => ({
                    ...pre,
                    current: paginationData?.pageNum,
                  }));
                  onPageChange({
                    pageSize: paginationData?.pageSize,
                    current: paginationData.pageNum,
                  });
                } else if (paginationData.current < 1) {
                  setPpaginationData((pre) => ({
                    ...pre,
                    current: 1,
                  }));
                  onPageChange({
                    pageSize: paginationData?.pageSize,
                    current: 1,
                  });
                } else {
                  onPageChange({
                    pageSize: paginationData?.pageSize,
                    current: paginationData.current,
                  });
                }
              } else if (e.key === 'Enter' && isNull(paginationData.current)) {
                setPpaginationData((pre) => ({
                  ...pre,
                  current: 1,
                }));
                onPageChange({
                  pageSize: paginationData?.pageSize,
                  current: 1,
                });
              }
            }}
            style={{ width: '48px' }}
          />
          <span style={{ paddingLeft: '5px', fontSize: '14px' }}>
            页&ensp;共{paginationData.pageNum}页
          </span>
          <Button
            type="text"
            icon={<RightOutlined />}
            onClick={(e) => {
              e.preventDefault();

              if (paginationData.current + 1 <= paginationData?.pageNum) {
                setPpaginationData((pre) => ({
                  ...pre,
                  current: paginationData.current + 1,
                }));
                onPageChange?.({
                  pageSize: paginationData?.pageSize,
                  current: paginationData?.current + 1,
                });
              }
            }}
          />
          <Button
            type="text"
            icon={<VerticalLeftOutlined />}
            onClick={(e) => {
              e.preventDefault();

              if (paginationData.current !== paginationData.pageNum) {
                setPpaginationData((pre) => ({
                  ...pre,
                  current: paginationData.pageNum,
                }));
                onPageChange?.({
                  pageSize: pagination?.pageSize,
                  current: paginationData.pageNum,
                });
              }
            }}
          />
          <span style={{ paddingLeft: '20px', fontSize: '14px' }}>
            共{pagination.total}条
          </span>
          <Dropdown
            menu={{
              items: [
                {
                  key: '10',
                  label: '10条/页',
                  onClick: (e) => handlePageSizeChange(e),
                },
                {
                  key: '20',
                  label: '20条/页',
                  onClick: (e) => handlePageSizeChange(e),
                },
                {
                  key: '50',
                  label: '50条/页',
                  onClick: (e) => handlePageSizeChange(e),
                },
              ],
            }}
            placement="top"
          >
            <Button
              type="text"
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: '14px' }}
            >
              {pagination?.pageSize}条/页
              <DownOutlined />
            </Button>
          </Dropdown>

          <Button
            icon={<ReloadOutlined />}
            style={{ marginLeft: '5px' }}
            onClick={(e) => {
              e.preventDefault();
              setPpaginationData((pre) => ({
                ...pre,
                current: 1,
                pageSize: initpageSize,
              }));
              onReset();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProTable;
