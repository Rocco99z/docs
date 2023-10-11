import React, { useMemo } from "react";
import { Button, Form, Space } from "antd";
import type { FormProps } from "antd";

export type SearchConfig = {
  /** @name 重置按钮的文本 */
  cancelText?: React.ReactNode;
  /** @name 提交按钮的文本 */
  submitText?: React.ReactNode;
};

export interface BaseFormProps extends FormProps {
  /**
   *  @description
   */
  children: React.ReactNode;
  /**
   * @description label 宽度
   * @default 70
   */
  labelWidth?: string | number;
  /**
   * @description 提交按钮loading
   * @default
   */
  loading?: boolean;
  /**
   * @description 取消事件
   * @default
   */
  onCancel?: (e: any) => void;
  /**
   * @description 表单底部提交按钮和取消按钮
   * @example 不显示按钮
   * submitter={false}
   *
   * @example 修改按钮的顺序 修改按钮文字 或者自定义按钮
   * submitter={{ render:(props,dom)=> [...dom.reverse()]}}
   */
  submitter?:
    | false
    | { searchConfig?: SearchConfig; render?: () => React.ReactNode };
}

const SubmitterWrapper: React.FC<any> = (props: any) => {
  return (
    <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
      <Space>{props.children}</Space>
    </Form.Item>
  );
};

const BaseForm: React.FC<BaseFormProps> = (props: BaseFormProps) => {
  const { labelWidth, loading, submitter, children, onCancel, ...rest } = props;

  /** 渲染底部按钮 */
  const submitterNode = useMemo(() => {
    if (!submitter) return null;
    if (submitter.render) {
      return <SubmitterWrapper>{submitter.render()}</SubmitterWrapper>;
    }
    const { cancelText = "取消", submitText = "确认" } =
      submitter.searchConfig ?? {};
    return (
      <SubmitterWrapper>
        <Button onClick={onCancel}>{cancelText}</Button>
        <Button type="primary" htmlType="submit" loading={loading}>
          {submitText}
        </Button>
      </SubmitterWrapper>
    );
  }, [submitter, loading]);

  return (
    <Form {...rest} labelCol={{ flex: `0 0 ${labelWidth}px` }}>
      {children}
      {submitter === false || submitter ? (
        submitterNode
      ) : (
        <SubmitterWrapper>
          <Button
            onClick={(e) => {
              if (loading) return;
              onCancel?.(e);
            }}
          >
            取消
          </Button>
          <Button
            type="primary"
            htmlType={"submit"}
            loading={loading}
            style={{ backgroundColor: "#1677ff" }}
          >
            确认
          </Button>
        </SubmitterWrapper>
      )}
    </Form>
  );
};

export default BaseForm;
