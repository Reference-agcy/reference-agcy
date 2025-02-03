import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Spinner from "@app/_components/spinner";
import { Button } from "../../../ui/button";
import ImageField from "./ImageField";
import SelectField from "./SelectField";
import TextEditorField from "./TextEditorField";
import { Post } from "@/@types/post";
import { adminApi } from "@app/_lib/adminApi";

const sharedClassName =
  "flex h-10 w-full rounded-xl border px-3 py-1 text-base text-gray-900 transition-colors placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring-1 flex h-10 w-full rounded-xl border px-3 py-1 text-base text-gray-900 transition-colors placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring-1";

export default function BlogForm({
  isEdit,
  slug,
  onCloseModal,
}: {
  isEdit: boolean;
  slug?: string;
  onCloseModal: () => void;
}) {
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    thumbnail: null,
    content: "",
    category: "",
    isPopular: false,
    lang: "en",
  });
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const response = await fetch(`/api/posts/${slug}`);
      return response.json();
    },
    enabled: isEdit,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isEdit && data) {
      setFormData({
        title: data.title,
        thumbnail: null,
        content: data.content,
        category: data.category,
        isPopular: data.isPopular,
        lang: data.lang,
      });
    }
  }, [isEdit, data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleContentChange = (value: string) => {
    setFormData({ ...formData, content: value });
    if (errors.content) {
      setErrors({ ...errors, content: "" });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, isPopular: e.target.checked });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, lang: value });
    if (errors.lang) {
      setErrors({ ...errors, lang: "" });
    }
  };

  const handleImageChange = (file: File | null) => {
    if (errors.thumbnail) {
      setErrors({ ...errors, thumbnail: "" });
    }
    setFormData({ ...formData, thumbnail: file });
  };

  const isValidForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.thumbnail) newErrors.thumbnail = "Thumbnail is required";
    if (!formData.content) newErrors.content = "Content is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.lang) newErrors.lang = "Language is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidForm()) return;

    const data = new FormData();
    data.append("title", formData.title);
    if (formData.thumbnail) {
      data.append("thumbnail", formData.thumbnail);
    }
    data.append("content", formData.content);
    data.append("category", formData.category);
    data.append("isPopular", formData.isPopular.toString());
    data.append("lang", formData.lang);

    try {
      setLoading(true);
      const response = await adminApi<Post>(
        `/api/posts${isEdit ? `/${slug}` : ""}`,
        {
          method: isEdit ? "PATCH" : "POST",
          body: data,
        },
      );

      if (response) {
        toast.success(
          isEdit ? "Blog updated successfully" : "Blog created successfully",
        );
        queryClient.invalidateQueries({ queryKey: ["blog"] });
        onCloseModal();
      }
    } catch (error) {
      console.error("An unexpected error happened:", error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error happened");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isEdit && data) {
      setFormData({
        title: data?.title,
        thumbnail: data?.thumbnail,
        content: data?.content,
        category: data?.category?.name,
        isPopular: data?.isPopular,
        lang: data?.lang,
      });
    }
  }, [isEdit, data]);

  return isLoading ? (
    <Spinner className="mx-auto" />
  ) : (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 rounded-2xl border border-primary-300 p-5"
    >
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2 font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter the title"
          className={`${sharedClassName} ${
            errors.title
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-gray-300 focus-visible:ring-gray-500"
          }`}
          value={formData?.title}
          onChange={handleChange}
        />
        {errors.title && (
          <span className="text-sm text-red-500">{errors.title}</span>
        )}
      </div>

      <ImageField
        defaultImage={
          formData?.thumbnail instanceof File
            ? URL.createObjectURL(formData?.thumbnail)
            : formData?.thumbnail
        }
        error={errors.thumbnail}
        label="Thumbnail"
        isDisabled={loading}
        setImage={handleImageChange}
      />

      <TextEditorField
        value={formData?.content}
        handleValueChange={handleContentChange}
        error={errors.content}
      />

      <div className="flex flex-col">
        <label htmlFor="category" className="mb-2 font-semibold">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Enter the category"
          className={`${sharedClassName} ${
            errors.category
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-gray-300 focus-visible:ring-gray-500"
          }`}
          value={formData?.category}
          onChange={handleChange}
        />
        {errors.category && (
          <span className="text-sm text-red-500">{errors.category}</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="isPopular"
          name="isPopular"
          checked={formData?.isPopular}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="isPopular" className="font-semibold">
          Is Popular
        </label>
      </div>

      <SelectField
        value={formData?.lang}
        handleValueChange={handleSelectChange}
        error={errors.lang}
      />

      <Button
        className="mx-auto w-1/2 rounded-xl text-base"
        type="submit"
        disabled={loading || isLoading}
      >
        {isEdit ? "Update" : "Create"}
      </Button>
    </form>
  );
}
