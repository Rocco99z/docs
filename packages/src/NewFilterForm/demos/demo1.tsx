import {
  FormInput,
  NewFilterForm,
  FormSelect,
  FormDatePicker,
} from '@simba/components';
import { Form } from 'antd';
export default () => {
  const [form] = Form.useForm();

  return (
    <NewFilterForm
      confirmResult={''}
      modalWidth={800}
      modalLabelWidth={90}
      onFinish={(val) => {
        // val 是 ExternalForm和 ModalFrom 的表单数据
        console.log('val: ', val);
      }}
      onReset={() => {}}
      externalInput={{
        placeholder: 'ICCID',
        onChange: (e) => {
          console.log('val: ', e.target.value);
        },
      }}
    >
      <FormInput
        placeholder="qqqq"
        validateTrigger={['onChange', 'onSubmit']}
        label="qqqq"
        name="qqqqq"
        span={12}
      />
      <FormSelect
        placeholder="请选择"
        label="SIM卡是否启用"
        name="isEnable"
        span={12}
        options={[
          { value: 1, label: '是' },
          { value: 2, label: '否' },
        ]}
      />
      <FormDatePicker.RangePicker
        showTime
        span={12}
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
    </NewFilterForm>
  );
};
