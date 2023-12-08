import {
  FormInput,
  MnoFilterForm,
  FormSelect,
  FormDatePicker,
} from '@simba/components';
import { Form } from 'antd';
import { useState } from 'react';
export default () => {
  const [form] = Form.useForm();

  return (
    <MnoFilterForm
      width={800}
      form={form}
      labelWidth={70}
      modalLabelWidth={90}
      onFinish={(val) => {
        // val 是 ExternalForm和 ModalFrom 的表单数据
        console.log('val: ', val);
      }}
      onReset={() => {}}
      externalForm={
        <>
          <FormInput
            placeholder="请输入iccid"
            validateTrigger={['onChange', 'onSubmit']}
            label="iccid"
            name="icc222id"
            span={6}
            key={1}
          />
          <FormInput
            placeholder="请输入iccid"
            validateTrigger={['onChange', 'onSubmit']}
            label="iccid"
            name="icc222id2"
            span={6}
            key={2}
          />
        </>
      }
    >
      <FormInput
        placeholder="qqqq"
        validateTrigger={['onChange', 'onSubmit']}
        label="qqqq"
        name="qqqqq"
      />
      <FormSelect
        placeholder="请选择"
        label="SIM卡是否启用"
        name="isEnable"
        options={[
          { value: 1, label: '是' },
          { value: 2, label: '否' },
        ]}
      />
      <FormDatePicker.RangePicker
        showTime
        name="creatTime"
        placeholder={['请选择添加时间', '请选择添加时间']}
        label="添加时间"
      />
      {/* <FormInput
        placeholder="qqqq"
        validateTrigger={['onChange', 'onSubmit']}
        label="qqqq"
        name="qqqqq"
        span={12}
      />
      <FormInput
        placeholder="qqqq"
        validateTrigger={['onChange', 'onSubmit']}
        label="qqqq"
        name="qqqqq"
        span={12}
      /> */}
    </MnoFilterForm>
  );
};
