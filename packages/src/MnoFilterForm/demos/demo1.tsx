import { FormInput, MnoFilterForm } from '@simba/components';
export default () => {
  return (
    <MnoFilterForm
      width={800}
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
          />
          <FormInput
            placeholder="请输入iccid"
            validateTrigger={['onChange', 'onSubmit']}
            label="iccid"
            name="icc222id"
            span={6}
          />
        </>
      }
    >
      <FormInput
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
      />
      <FormInput
        placeholder="qqqq"
        validateTrigger={['onChange', 'onSubmit']}
        label="qqqq"
        name="qqqqq"
        span={12}
      />
    </MnoFilterForm>
  );
};
