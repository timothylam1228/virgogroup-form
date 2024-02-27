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
import { useState } from 'react';

const toolOptions: string[] = [
  'Redux',
  'Lodash',
  'Ant design',
  'Webpack',
  'Other',
];

const CheckboxGroup = Checkbox.Group;

const ApplyForm = () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [proficient, setProficient] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const onChangeSwitch = () => {
    setDisabled(pre => !pre);
  };
  const onChangeCheckbox = (list: string[]) => {
    setCheckedList(list);
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    setProficient(e.target.value);
  };

  const onSubmit = () => {
    console.log(proficient, checkedList);
    console.log('is proficient is React?', proficient ? 'Yes' : 'No');
    console.log('Tools:', checkedList);
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
                  className={` ${proficient ? 'text-remark' : 'text-black'}`}
                  defaultChecked
                  value={false}
                >
                  No
                </Radio>
                <Radio
                  className={` ${proficient ? 'text-black' : 'text-remark'}`}
                  value={true}
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
            options={toolOptions}
            value={checkedList}
            onChange={onChangeCheckbox}
          />
        </Form.Item>
        <Form.Item className="w-full flex justify-center">
          <Button
            disabled={disabled}
            size="large"
            htmlType="submit"
            className="bg-dark-purple rounded-2xl hover:bg-dark-purple hover:text-white text-white disabled:text-white font-semibold text-lg disabled:bg-disabled-purple"
          >
            Process
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ApplyForm;
