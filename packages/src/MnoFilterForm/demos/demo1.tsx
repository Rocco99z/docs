import { FormInput, MnoFilterForm } from '@simba/components';
import { Form } from 'antd';
export default () => {
  const [form] = Form.useForm();
  return (
    <MnoFilterForm
      width={800}
      form={form}
      labelWidth={70}
      modalLabelWidth={50}
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
