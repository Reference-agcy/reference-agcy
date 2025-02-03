import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "@app/_lib/utils";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  containerClassName?: ClassNameValue;
  inputClassName?: ClassNameValue;
}
export default function SearchInput({
  value,
  onChange,
  placeholder,
  containerClassName,
  inputClassName,
}: Props) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-gray-0 p-[1.357rem] ps-16",
        containerClassName,
      )}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
        className={cn("bg-transparent focus:outline-none", inputClassName)}
        placeholder={placeholder}
      />
      <IoSearchOutline
        className="absolute inset-y-[1.357rem] start-[1.357rem] text-blue-500"
        size={24}
      />
    </div>
  );
}
