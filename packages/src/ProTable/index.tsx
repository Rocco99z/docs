/* eslint-disable indent */
import React, { useState, useMemo, useCallback } from "react";
import { Table, Space, Button, message, Tabs, Upload } from "antd";
import { ExportOutlined, ImportOutlined } from "@ant-design/icons";
import exportData from "./utils";
import type { TableProps, TabsProps, UploadProps } from "antd";
import "./index.css";

interface ProTableProps extends TableProps<any> {
  className?: string;

  /**
   * @description 表格第一列排序序号
   * @default false
   */
  index?: boolean;
  /**
   * @description 表格最后一列 操作按钮
   * @default false
   */
  action?: (record: any) => JSX.Element[];

  /**
   * @description 工具栏区域配置 可配置tabs 导入 导出 另外的操作按钮
   */
  toolBar?: {
    /**
     * @description 导出操作 api导出接口  fileName 导出文件名
     */
    exportProps?: { api: (obj?: any) => Promise<any>; fileName: string };
    /**
     * @description 导入操作
     */
    importProps?: UploadProps;
    /**
     * @description 标签页配置
     */
    tabs?: Omit<TabsProps, "tabBarExtraContent" | "renderTabBar">;
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
    index = false,
    columns: propsColumns,
    action,
    toolBar,
    ...rest
  } = props;

  const columns = useMemo(() => {
    const tempColumns = [];

    if (index) {
      tempColumns.push({
        fixed: "left",
        width: 48,
        dataIndex: "index",
        key: "index",
        render: (text: string, record: any, index: number) => {
          return (
            <div
              style={{
                borderRadius: "50%",
                backgroundColor: `rgba(0, 0, 0,${1 - index / 100})`,
                width: "18px",
                height: "18px",
                color: "#fff",
                textAlign: "center",
                lineHeight: "18px",
              }}
            >
              {index + 1}
            </div>
          );
        },
      });
    }
    if (propsColumns) {
      tempColumns.push(...propsColumns);
    }
    if (action) {
      tempColumns.push({
        fixed: "right",
        title: "操作",
        key: "option",
        align: "center",
        render: (text: string, record: any, index: number) => [
          <Space key={`space${index}`}>{action(record)}</Space>,
        ],
      });
    }
    return tempColumns;
  }, [propsColumns, index, rest.dataSource, rest.pagination, action]);

  // 导入
  const [importLoading, setImportLoading] = useState(false);
  const importProps: UploadProps = {
    showUploadList: false,
    ...toolBar?.importProps,
    onChange(info) {
      toolBar?.importProps?.onChange?.(info);
      setImportLoading(true);
      if (info.file.status === "done") {
        setImportLoading(false);
        message.success(`${info.file.name} 导入成功`);
      } else if (info.file.status === "error") {
        setImportLoading(false);
        message.error(`${info.file.name} 导入失败`);
      }
    },
  };
  // 导出
  const [exportLoading, setExportLoading] = useState(false);
  const handleExport = useCallback(() => {
    if (exportLoading) return;
    setExportLoading(true);
    return toolBar?.exportProps
      ?.api()
      .then((res) => {
        exportData(res, toolBar?.exportProps?.fileName ?? "导出数据");
        setExportLoading(false);
        message.success("导出成功");
      })
      .catch(() => {
        setExportLoading(false);
        message.error("导出失败");
      });
  }, [toolBar?.exportProps]);

  return (
    <div className={className}>
      {toolBar && (
        <div className="toolbar">
          <div style={{ width: "60%" }}>
            {toolBar?.tabs && <Tabs {...toolBar?.tabs} />}
          </div>
          <Space
            style={{
              width: "40%",
              justifyContent: "flex-end",
              overflow: "hidden",
            }}
          >
            {toolBar?.importProps && (
              <Upload {...importProps}>
                <Button
                  icon={<ExportOutlined />}
                  loading={importLoading}
                  disabled={importLoading}
                >
                  导入
                </Button>
              </Upload>
            )}
            {toolBar?.exportProps && (
              <Button
                onClick={handleExport}
                loading={exportLoading}
                icon={<ImportOutlined />}
              >
                导出
              </Button>
            )}
            {toolBar?.extraContent}
          </Space>
        </div>
      )}
      <Table rowKey={rowKey} columns={columns} {...rest} />
    </div>
  );
};

export default ProTable;
