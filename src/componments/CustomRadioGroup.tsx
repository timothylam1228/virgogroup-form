import { Radio, RadioChangeEvent, Space } from 'antd';
import './radio.css'
export interface RadioOptionsInterface {
  label: string;
  value: boolean | number | string;
}

interface CustomRadioGroupInterface {
  options: RadioOptionsInterface[];
  disabled: boolean;
  defaultValue: boolean | number | string;
  value: boolean | number | string;
  onChange: (e: RadioChangeEvent) => void;
  direction: 'vertical' | 'horizontal';
  name?: string;
}

const CustomRadioGroup = (props: CustomRadioGroupInterface) => {
  const {
    options,
    defaultValue,
    disabled,
    onChange,
    value,
    direction = 'vertical',
    name,
  } = props;
  return (
    <Radio.Group
      disabled={disabled}
      defaultValue={defaultValue}
      onChange={onChange}
      name={name ? name : 'null'}
    >
      <Space direction={direction} className="flex items-start">
        {options.map((option, index) => {
          return (
            <Radio
              key={`radio-options-${index}`}
              className={` ${option.value === value ? 'text-black' : 'text-remark'}`}
              value={option.value}
            >
              {option.label}
            </Radio>
          );
        })}
      </Space>
    </Radio.Group>
  );
};

export default CustomRadioGroup;
