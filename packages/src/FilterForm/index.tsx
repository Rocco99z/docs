import React, { useState } from "react"
import { Button, Row, Col, Space } from "antd"
import { UpOutlined, DownOutlined } from "@ant-design/icons"
import { BaseForm } from "../../index"
import "./index.css"

interface FilterFormProps {
  /**
   *  @description 内容搜索项
   */
  children: React.ReactNode
  /**
   * @description label 宽度
   * @default 70
   */
  labelWidth?: string | number
  /**
   * @description 查询按钮loading
   * @default
   */
  loading?: boolean
  /**
   * @description 标签文本对齐方式
   * @default "right"
   */
  labelAlign?: "left" | "right"

  /**
   * @description 提交表单事件
   */
  onFinish: (value: any) => void
  /**
   * @description 重置事件
   */
  onReset: () => void
}

const FilterForm: React.FC<FilterFormProps> = (props: FilterFormProps) => {
  const { labelWidth = 70, onFinish, onReset, children, labelAlign, loading } = props
  const [collapsed, setCollapsed] = useState(false) // 展开收缩

  return (
    <BaseForm onFinish={onFinish} labelAlign={labelAlign} labelWidth={labelWidth} submitter={false}>
      <Row className={collapsed ? "filter-row-on" : "filter-row"} gutter={[10, 10]}>
        {children}

        <Col flex='auto'>
          <Space
            style={{
              width: "auto",
              color: "#3f96ff",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              fontWeight: "500",
            }}
          >
            <Button htmlType='reset' onClick={onReset}>
              重置
            </Button>
            <Button
              type='primary'
              htmlType='submit'
              loading={loading}
              style={{ backgroundColor: "#1677ff" }}
            >
              查询
            </Button>

            <Space
              style={{ cursor: "pointer" }}
              onClick={() => {
                setCollapsed(!collapsed)
              }}
            >
              {collapsed ? "收起" : "展开"}
              {collapsed ? <UpOutlined /> : <DownOutlined />}
            </Space>
          </Space>
        </Col>
      </Row>
      <div />
    </BaseForm>
  )
}

export default FilterForm
