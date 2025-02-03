import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Option {
  value: string;
  label: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  label: string;
  placeholder?: string;
}

const DropDown: React.FC<Props> = ({
  value,
  onChange,
  options,
  label,
  placeholder = "Select...",
}) => {
  return (
    <div className="form-group">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-input select-input peer"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label className="form-label peer-focus:floating-label peer-[&:not(:empty)]:floating-label peer-focus:text-blue-500">
        {label}
      </label>
      <MdKeyboardArrowDown className="input-icon select-icon" size={24} />
    </div>
  );
};

export default DropDown;
