import "react-quill/dist/quill.snow.css";
import React from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "image",
];

interface Props {
  value: string;
  handleValueChange: (content: string) => void;
  error: string | undefined;
}

export default function TextEditorField({
  value,
  handleValueChange,
  error,
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor="content" className="mb-2 font-semibold">
        Content
      </label>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={handleValueChange}
        className={`h-[250px] [&_.ql-container.ql-snow]:max-h-[210px] [&_.ql-container.ql-snow]:rounded-b-2xl [&_.ql-toolbar.ql-snow]:rounded-t-2xl ${
          error
            ? "[&_.ql-container.ql-snow]:border-red-500 [&_.ql-toolbar.ql-snow]:border-red-500"
            : "[&_.ql-container.ql-snow]:border-gray-300 [&_.ql-toolbar.ql-snow]:border-gray-300"
        }`}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
