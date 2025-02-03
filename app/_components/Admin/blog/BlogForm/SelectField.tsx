import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@app/_components/ui/select";

interface Props {
  value: string;
  handleValueChange: (value: string) => void;
  error?: string;
}

export default function SelectField({
  value,
  handleValueChange,
  error,
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor="lang" className="mb-2 font-semibold">
        Language
      </label>
      <Select onValueChange={handleValueChange} value={value}>
        <SelectTrigger className="flex h-10 w-full rounded-xl border border-gray-300 px-3 py-1 text-base text-gray-900 transition-colors placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-0">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent className="border-gray-300 bg-white">
          <SelectItem value="en" className="cursor-pointer hover:bg-gray-100">
            English
          </SelectItem>
          <SelectItem value="ar" className="cursor-pointer hover:bg-gray-100">
            Arabic
          </SelectItem>
        </SelectContent>
      </Select>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
