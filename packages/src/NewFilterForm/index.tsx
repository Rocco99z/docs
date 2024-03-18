//@ts-nocheck

import { BaseForm } from '@simba/components';
import type { FormProps } from 'antd';
import { Button, Col, Modal, Row, Space, Input } from 'antd';
import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { FilterIcon } from './Icon';
import './index.css';
import type { InputProps } from 'antd';
import { isArray } from 'lodash';
import ReloadImg from './reload.png';
import SearchImg from './search.png';

export interface FilterFormProps {
  className?: string;

  /**
   * @description 外置搜索项
   */
  externalInput: InputProps;
  /**
   *  @description 更多查询弹框内容搜索项
   */
  children: React.ReactNode;
  /**
   * @description 弹框的宽度
   * @default
   */
  modalWidth: number;

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

const NewFilterForm: React.FC<FilterFormProps & FormProps> = (
  props: FilterFormProps & FormProps,
) => {
  const {
    className,
    externalInput,
    children,
    modalWidth,
    modalLabelWidth,
    onFinish,
    onReset,
    confirmResult,
    initialValues,
    ...rest
  } = props;

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const resultString = confirmResult?.split('_')?.[0]?.toString();
    if (resultString === '200' || '0') setOpenModal(false);
  }, [confirmResult]);

  // rotate
  const [rotationAngle, setRotationAngle] = useState(0);
  return (
    <Space
      style={{
        width: '100%',
        justifyContent: 'end',
        alignItems: 'center',
        background: 'transparent',
      }}
      size="middle"
      align="end"
      className={className}
    >
      <Input
        {...externalInput}
        className="new-mno-input"
        prefix={<img src={SearchImg} className="new-mno-input-img" />}
      />

      <Button
        className="more-filter-btn"
        style={{
          width: '8.75vw',
          height: '5.185vh',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '0.83vw',
          paddingRight: '0.83vw',
          minWidth: '130px',
          minHeight: '45px',
        }}
        type="primary"
        shape="round"
        icon={<FilterIcon />}
        onClick={() => setOpenModal(true)}
      >
        更多查询
      </Button>
      <Button
        htmlType="reset"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 50%)',
          width: '2.92vw',
          height: '2.92vw',
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '45px',
          minWidth: '45px',
          border: '1px solid #fff',
        }}
        shape="circle"
        onClick={(e) => {
          e.preventDefault();
          setRotationAngle(rotationAngle + 360);
          onReset();
        }}
      >
        <img
          src={ReloadImg}
          className="rotate-image "
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        />
      </Button>
    </Space>
  );

  // const tempExternalForm = useMemo(() => {
  //   let tempEle: any = [];
  //   if (externalForm?.props?.children) {
  //     const externalFormEle = externalForm?.props?.children?.map(
  //       (element: any) => {
  //         return React.cloneElement(element, {
  //           span: 12,
  //           labelCol: { span: modalLabelWidth / 10 },
  //         });
  //       },
  //     );
  //     tempEle.push(externalFormEle);
  //   } else {
  //     const externalFormEle = React.cloneElement(externalForm, {
  //       span: 12,
  //       labelCol: { span: modalLabelWidth / 10 },
  //     });
  //     tempEle.push(externalFormEle);
  //   }

  //   if (isArray(children)) {
  //     const childrenEle = children?.map((element: any) => {
  //       return React.cloneElement(element, {
  //         span: 12,
  //         labelCol: { span: modalLabelWidth / 10 },
  //       });
  //     });
  //     tempEle.push(childrenEle);
  //   } else {
  //     const childrenEle = React.cloneElement(children, {
  //       span: 12,
  //       labelCol: { span: modalLabelWidth / 10 },
  //     });
  //     tempEle.push(childrenEle);
  //   }

  //   return tempEle;
  // }, [externalForm, children]);
};

export default NewFilterForm;
