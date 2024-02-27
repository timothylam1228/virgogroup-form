import {
  Switch,
  Card,
  Typography,
  Form,
  Space,
  RadioChangeEvent,
  Button,
} from 'antd';
import { useMemo, useState } from 'react';
import { data } from '../data/data.js';
import CustomRadioGroup, {
  RadioOptionsInterface,
} from './CustomRadioGroup.tsx';
import CustomCheckboxGroup, { CheckboxOption } from './CustomCheckboxGroup.tsx';

const toolOptions: CheckboxOption[] = [
  { label: 'Redux', value: 0 },
  { label: 'Lodash', value: 1 },
  { label: 'Ant design', value: 2 },
  { label: 'Webpack', value: 3 },
  { label: 'Other', value: 4 },
];
const radioOptions: RadioOptionsInterface[] = [
  { label: 'No', value: false },
  { label: 'Yes', value: true },
];

interface DataInterface {
  isProficient: boolean;
  toolsUsed: string;
}

const ApplyForm = () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [formData, setFormData] = useState<DataInterface>(data);

  const onChangeSwitch = () => {
    setDisabled(prev => !prev);
  };

  const onChangeCheckbox = (
    checkedValues: Array<string | number | boolean>,
  ) => {
    setFormData(prev => ({
      ...prev,
      toolsUsed: checkedValues.join(','),
    }));
  };

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
          <CustomRadioGroup
            options={radioOptions}
            defaultValue={formData.isProficient}
            disabled={disabled}
            onChange={onChangeRadio}
            value={formData.isProficient}
            direction="vertical"
          />
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
          <CustomCheckboxGroup
            className={'flex flex-col gap-4'}
            disable={disabled}
            options={toolOptions}
            onChange={onChangeCheckbox}
            defaultValue={convertCheckboxValue}
            value={convertCheckboxValue}
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
