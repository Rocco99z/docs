import React, { forwardRef, useMemo, createRef } from "react"
import { Form, Col } from "antd"
import { omit, pick } from "lodash"

/**

 * 给表单项 增加 Form.Item
 * @param Component antd表单子项
 *
 */
export const createField = (Component: any): React.ForwardRefExoticComponent<any> =>
  forwardRef((props: any, ref) => {
    const { children, ...rest } = props
    const attrList = [
      "colon",
      "extra",
      "getValueFromEvent",
      "getValueProps",
      "help",
      "hidden",
      "initialValue",
      "label",
      "labelAlign",
      "labelCol",
      "name",
      "noStyle",
      "normalize",
      "required",
      "rules",
      "tooltip",
      "validateFirst",
      "validateStatus",
      "validateTrigger",
      "valuePropName",
    ]
    const formItemAttr = pick(rest, [...attrList, "span"])
    const componentAttr = omit(rest, [...attrList, "span"])

    const colSpan = useMemo(
      () => (props.span ? { xs: 24, md: 12, lg: 8, xl: props.span } : {}),
      [props.span],
    )

    return (
      <Col {...colSpan}>
        <Form.Item {...formItemAttr}>
          <Component {...componentAttr} ref={ref}>
            {children}
          </Component>
        </Form.Item>
      </Col>
    )
  })
