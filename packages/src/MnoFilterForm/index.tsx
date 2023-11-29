//@ts-nocheck

import { BaseForm } from '@simba/components';
import type { FormProps } from 'antd';
import { Button, Col, Row, Space } from 'antd';
import React, {
  JSXElementConstructor,
  ReactElement,
  useMemo,
  useState,
} from 'react';
import FilterModal from './ModalFrom';
import FilterIcon from './filter.svg';
import './index.css';
export interface FilterFormProps {
  className?: string;

  /**
   * @description 弹框的宽度
   * @default
   */
  width: number;
  /**
   * @description 正常内容搜索项
   */
  externalForm:
    | React.ReactNode
    | ReactElement<any, string | JSXElementConstructor<any>>;
  /**
   *  @description 更多查询弹框内容搜索项
   */
  children: React.ReactNode;

  /**
   * @description label 宽度
   * @default 70
   */
  labelWidth?: string | number;
  /**
   * @description 查询按钮loading
   * @default
   */
  loading?: boolean;
  /**
   * @description 标签文本对齐方式
   * @default "right"
   */
  labelAlign?: 'left' | 'right';

  /**
   * @description 提交表单事件
   */
  onFinish: (value: any) => void;
  /**
   * @description 重置事件
   */
  onReset: () => void;
}

const MnoFilterForm: React.FC<FilterFormProps & FormProps> = (
  props: FilterFormProps & FormProps,
) => {
  const {
    className,
    labelWidth = 70,
    onFinish,
    onReset,
    children,
    labelAlign,
    externalForm,
    width,
    loading,
    form,
    ...rest
  } = props;

  const [openModal, setOpenModal] = useState(false);

  const [formValue, setFormValue] = useState({
    externalFormval: {},
    modalFormValue: {},
  });

  const tempExternalForm = useMemo(() => {
    if (externalForm?.props?.children) {
      return externalForm?.props?.children?.map((element: any) => {
        return React.cloneElement(element, { span: 12 });
      });
    } else
      return React.cloneElement(externalForm, {
        span: 12,
      });
  }, [externalForm]);

  return (
    <BaseForm
      {...rest}
      form={form}
      onFinish={(val: any) => {
        setFormValue((pre) => ({ ...pre, externalFormval: val }));
        onFinish({
          ...formValue.externalFormval,
          ...formValue.modalFormValue,
          ...val,
        });
      }}
      labelAlign={labelAlign}
      labelWidth={labelWidth}
      submitter={false}
      className={className}
    >
      <Row gutter={[5, 2]}>
        {externalForm}

        {children && (
          <Col>
            <FilterModal
              form={form}
              onFinish={(val: any) => {
                setFormValue((pre) => ({ ...pre, modalFormValue: val }));
                onFinish({
                  ...formValue.externalFormval,
                  ...formValue.modalFormValue,
                  ...val,
                });
              }}
              open={openModal}
              width={width}
              trigger={
                <div className="filter-more" onClick={() => setOpenModal(true)}>
                  <img src={FilterIcon} width={20} />
                  更多查询
                </div>
              }
              title="更过查询"
              loading={loading}
              submitter={{
                render: () => (
                  <>
                    <Button
                      onClick={(e) => {
                        if (loading) return;
                        setOpenModal(false);
                      }}
                    >
                      取消
                    </Button>
                    <Button htmlType="reset" onClick={onReset}>
                      重置
                    </Button>
                    <Button
                      type="primary"
                      htmlType={'submit'}
                      loading={loading}
                      style={{ backgroundColor: '#1677ff' }}
                    >
                      确认
                    </Button>
                  </>
                ),
              }}
            >
              {tempExternalForm}
              {children}
            </FilterModal>
          </Col>
        )}
        <Col flex="auto">
          <Space
            style={{
              width: 'auto',
              color: '#3f96ff',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              fontWeight: '500',
            }}
          >
            <Button htmlType="reset" onClick={onReset}>
              重置
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{ backgroundColor: '#1677ff' }}
            >
              查询
            </Button>
          </Space>
        </Col>
      </Row>
      <div />
    </BaseForm>
  );
};

export default MnoFilterForm;
