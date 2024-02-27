import { Checkbox } from 'antd';
import './checkbox.css';
export interface CheckboxOption {
  label: string;
  value: string | number | boolean;
}

interface CustomCheckboxGroupProps {
  disable: boolean;
  options: CheckboxOption[];
  className: string;
  name?: string;
  defaultValue?: Array<boolean | number | string>;
  value: Array<boolean | number | string>;
  onChange: (checkedValue: Array<string | number | boolean>) => void;
}
const CustomCheckboxGroup = (props: CustomCheckboxGroupProps) => {
  const { disable, options, name, onChange, value, className, defaultValue } =
    props;

  return (
    <Checkbox.Group
      disabled={disable}
      className={className}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
    >
      {options.map((option, index) => {
        return (
          <Checkbox
            key={`${name}-checkbox-${index}`}
            className="text-description"
            value={option.value.toString()}
          >
            {option.label}
          </Checkbox>
        );
      })}
    </Checkbox.Group>
  );
};

export default CustomCheckboxGroup;
