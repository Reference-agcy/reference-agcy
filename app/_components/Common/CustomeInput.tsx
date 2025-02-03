import React from "react";
import { IoSearchOutline } from "react-icons/io5";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}
const CustomeInput = ({ value, onChange, label }: Props) => {
  return (
    <div className="form-group">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
        className="form-input peer"
        placeholder=" "
      />
      <label className="form-label peer-focus:floating-label peer-[:not(:placeholder-shown)]:floating-label peer-focus:text-blue-500">
        {label}
      </label>
      <IoSearchOutline className="input-icon search-icon" size={24} />
    </div>
  );
};

export default CustomeInput;
