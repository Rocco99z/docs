import React from "react"
import { Table } from "antd"
import type { TableProps } from "antd"
import "./index.css"

interface ExpandRowTableProps extends TableProps<any> {
  className?: string
}

/** 表格展开下的行表格 */
const ExpandRowTable: React.FC<ExpandRowTableProps> = (props: ExpandRowTableProps) => {
  const { className, ...prop } = props

  return <Table className={`${className} expand-row-table`} pagination={false} {...prop} />
}
//#fafafa ant-table-cell // 后续会放到@simba/component
export default ExpandRowTable
