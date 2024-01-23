//@ts-nocheck

import { BaseForm } from '@simba/components';
import type { FormProps } from 'antd';
import { Button, Col, Modal, Row, Space } from 'antd';
import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { FilterIcon } from './filter';
import './index.css';
import type { FormInstance } from 'antd';
import { isArray } from 'lodash';
export interface FilterFormProps {
  className?: string;

  /**
   * @description 弹框的宽度
   * @default
   */
  width: number;
  /**
   * @description 表单实例
   * @default
   */
  form: FormInstance<any>;
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
   * @description  外置搜索项label 宽度
   * @default 70
   */
  labelWidth?: string | number;
  /**
   * @description  更多查询搜索项label 宽度
   * @default 70
   */
  modalLabelWidth?: string | number;
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

  /** 确定后是否关闭 */
  confirmResult: string;
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
    initialValues,
    modalLabelWidth,
    width,
    loading,
    form,
    confirmResult,
    ...rest
  } = props;

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (confirmResult?.split('_')?.[0] === '200') setOpenModal(false);
  }, [confirmResult]);
  const [formValue, setFormValue] = useState({
    externalFormval: {},
    modalFormValue: {},
  });

  const tempExternalForm = useMemo(() => {
    let tempEle: any = [];
    if (externalForm?.props?.children) {
      const externalFormEle = externalForm?.props?.children?.map(
        (element: any) => {
          return React.cloneElement(element, {
            span: 12,
            labelCol: { span: modalLabelWidth / 10 },
          });
        },
      );
      tempEle.push(externalFormEle);
    } else {
      const externalFormEle = React.cloneElement(externalForm, {
        span: 12,
        labelCol: { span: modalLabelWidth / 10 },
      });
      tempEle.push(externalFormEle);
    }

    if (isArray(children)) {
      const childrenEle = children?.map((element: any) => {
        return React.cloneElement(element, {
          span: 12,
          labelCol: { span: modalLabelWidth / 10 },
        });
      });
      tempEle.push(childrenEle);
    } else {
      const childrenEle = React.cloneElement(children, {
        span: 12,
        labelCol: { span: modalLabelWidth / 10 },
      });
      tempEle.push(childrenEle);
    }

    return tempEle;
  }, [externalForm, children]);

  return (
    <BaseForm
      {...rest}
      form={form}
      initialValues={initialValues}
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
      <Row gutter={[5, 2]} className='external-row'>
        {externalForm}

        {children && (
          <>
            <Button
              icon={<FilterIcon />}
              onClick={() => setOpenModal(true)}
              style={{ marginLeft: '12px' }}
            >
              更多查询
            </Button>
            <Modal
              className="mno-filter-modal"
              onCancel={() => {
                setOpenModal(false);
              }}
              title="更多查询"
              open={openModal}
              width={width}
              footer={
                <div className="modal-footer">
                  <div>
                    <Button
                      style={{ width: '88px' }}
                      htmlType="reset"
                      onClick={() => {
                        if (loading) return;
                        form?.resetFields();
                        onReset();
                      }}
                    >
                      重置
                    </Button>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Button
                      style={{ width: '88px' }}
                      onClick={() => {
                        if (loading) return;
                        setOpenModal(false);
                      }}
                    >
                      取消
                    </Button>

                    <Button
                      type="primary"
                      htmlType={'submit'}
                      loading={loading}
                      disabled={loading}
                      style={{ backgroundColor: '#1677ff', width: '88px' }}
                      onClick={() => {
                        if (loading) return;
                        form?.submit();
                      }}
                    >
                      查询
                    </Button>
                  </div>
                </div>
              }
            >
              <Row gutter={[5, 2]}>{tempExternalForm}</Row>
            </Modal>
          </>
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
