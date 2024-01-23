import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { Form, Modal } from 'antd';
import { BaseForm } from '@simba/components';

import type { ModalProps, FormProps } from 'antd';
import type { SearchConfig } from '../BaseForm';

interface ModalFormProps {
  className?: string;

  /**
   * @description 查询按钮loading
   * @default
   */
  loading?: boolean;

  children: any;
  /**
   * @description 用于触发 Modal 打开的 dom，一般是 button
   * @default
   */
  trigger?: JSX.Element;
  /**
   * @description 弹框的标题
   * @default
   */
  title: React.ReactNode;
  /**
   * @description 弹框的宽度
   * @default
   */
  width: number;
  /**
   * @description 提交表单事件,如果返回true会关闭modal
   */
  onFinish?: (value: any) => void;
  /** @name 受控的打开关闭 */
  open?: ModalProps['open'];
  /** @name 打开关闭的事件 */
  onOpenChange?: (open: boolean) => void;
  /**
   * 不支持 'visible'，请使用全局的 visible
   *
   * @name 弹框的属性
   */
  modalProps?: Omit<ModalProps, 'visible'>;
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

const ModalForm: React.FC<ModalFormProps & FormProps> = (
  props: ModalFormProps & FormProps,
) => {
  const {
    className,
    open: propsOpen,
    title,
    width,
    children,
    trigger,
    loading,
    modalProps,
    onOpenChange,
    onFinish,
    submitter,
    ...rest
  } = props;

  const [open, setOpen] = useState(propsOpen ?? false);
  const [formRef] = Form.useForm();

  const openRef = useRef(false); // 第一次不执行onOpenChange
  useEffect(() => {
    if (openRef.current) onOpenChange?.(open);
    else openRef.current = true;
  }, [open]);

  //开启modal按钮
  const triggerDom = useMemo(() => {
    if (!trigger) return null;

    return React.cloneElement(trigger, {
      key: 'trigger',
      ...trigger.props,
      onClick: async (e: any) => {
        setOpen(!open);
        trigger.props?.onClick?.(e);
      },
    });
  }, [trigger, open, setOpen]);

  // 关闭后重置表单
  const resetFields = useCallback(() => {
    const form = rest.form ?? formRef;
    if (form) form.resetFields();
  }, [rest.form]);

  // 提交处理
  const onFinishHandle = useCallback(
    async (values: any) => onFinish?.(values),
    [onFinish, setOpen],
  );
  return (
    <>
      <Modal
        className={className}
        destroyOnClose
        width={width}
        title={title}
        {...modalProps}
        open={open}
        footer={null}
        onCancel={(e) => {
          if (loading) return;
          setOpen(false);
          modalProps?.onCancel?.(e);
        }}
        afterClose={() => {
          resetFields();
          setOpen(false);
          modalProps?.afterClose?.();
        }}
      >
        <BaseForm
          style={{ paddingTop: '15px' }}
          {...rest}
          submitter={submitter}
          form={rest.form || formRef}
          onFinish={onFinishHandle}
          loading={loading}
          onCancel={(e) => {
            if (loading) return;
            modalProps?.onCancel?.(e);
            setOpen(false);
          }}
        >
          {children}
        </BaseForm>
      </Modal>
      {triggerDom}
    </>
  );
};

export default ModalForm;
