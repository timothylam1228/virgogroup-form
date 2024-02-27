import {
  Switch,
  Radio,
  Card,
  Typography,
  Form,
  Space,
  RadioChangeEvent,
  Button,
  Checkbox,
} from 'antd';
import { useMemo, useState } from 'react';
import { data } from '../data/data.js';

const toolOptions: string[] = [
  'Redux',
  'Lodash',
  'Ant design',
  'Webpack',
  'Other',
];

interface DataInterface {
  isProficient: boolean;
  toolsUsed: string;
}
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
const CheckboxGroup = Checkbox.Group;

const ApplyForm = () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [formData, setFormData] = useState<DataInterface>(data);

  const onChangeSwitch = () => {
    setDisabled(prev => !prev);
  };

  const onChangeCheckbox = (checkedValues: string[]) => {
    setFormData(prev => ({
      ...prev,
      toolsUsed: checkedValues.join(','),
    }));
  };

  const checkboxOptions: Option[] = useMemo(() => {
    return toolOptions.map((option, index) => ({
      label: option,
      value: index.toString(), // Since you're using indices as values in `toolsUsed`
    }));
  }, []);

  const convertCheckboxValue = useMemo(() => {
    return formData.toolsUsed.split(',');
  }, [formData.toolsUsed]);

  const onChangeRadio = (e: RadioChangeEvent) => {
    setFormData(pre => ({
      ...pre,
      isProficient: e.target.value,
    }));
  };

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <Card className="w-full max-w-[409px]">
      <Form
        form={form}
        name="trigger"
        layout="vertical"
        autoComplete="off"
        className="flex flex-col items-start w-full"
        onFinish={onSubmit} // Use onFinish to handle form submission
      >
        <Form.Item className="w-full">
          <div className="w-full flex flex-row justify-between">
            <Typography className="w-fit flex">Editable</Typography>
            <Switch
              className={`${disabled ? 'ring-2 ring-[#D4CCF7]' : ''} flex w-fit`}
              defaultChecked
              onChange={onChangeSwitch}
            />
          </div>
        </Form.Item>
        <Form.Item className="text-start">
          <Typography className="font-bold text-lg">
            Are you proficient in ReactJS development?
          </Typography>
        </Form.Item>
        <Form.Item>
          <Typography>
            <Radio.Group
              disabled={disabled}
              name="proficient"
              defaultValue={false}
              buttonStyle={'solid'}
              onChange={onChangeRadio}
            >
              <Space direction="vertical" className="flex items-start">
                <Radio
                  className={` ${formData.isProficient ? 'text-remark' : 'text-black'}`}
                  defaultChecked
                  checked={!formData.isProficient}
                  value={false}
                >
                  No
                </Radio>
                <Radio
                  className={` ${formData.isProficient ? 'text-black' : 'text-remark'}`}
                  value={true}
                  checked={formData.isProficient}
                >
                  Yes
                </Radio>
              </Space>
            </Radio.Group>
          </Typography>
        </Form.Item>
        <Form.Item>
          <Space direction="vertical" className="flex items-start">
            <Typography className="text-black font-bold">
              Which tools do you use
            </Typography>
            <Typography className="text-description">
              Please select all that apply.
            </Typography>
          </Space>
        </Form.Item>
        <Form.Item>
          <CheckboxGroup
            disabled={disabled}
            className="flex flex-col gap-[15px]"
            options={checkboxOptions}
            value={convertCheckboxValue}
            onChange={onChangeCheckbox}
          />
        </Form.Item>
        <Form.Item className="w-full flex justify-center">
          <Button
            disabled={disabled}
            htmlType="submit"
            className="bg-dark-purple rounded-full hover:bg-dark-purple hover:text-white text-white disabled:text-white font-semibold text-lg disabled:bg-disabled-purple"
          >
            Process
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ApplyForm;
