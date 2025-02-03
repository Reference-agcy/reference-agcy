import { ChangeEvent, useRef, useState } from "react";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";

type Props = {
  setImage: (file: File | null) => void;
  defaultImage: string | null;
  error: string | undefined;
  label?: string;
  isDisabled?: boolean;
};

function ImageField({
  setImage,
  defaultImage,
  error,
  label,
  isDisabled = false,
}: Props) {
  const [previewedImage, setPreviewedImage] = useState<string | null>(
    defaultImage || null,
  );
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file?.type.split("/")[0] !== "image") {
      toast.error("Invalid file type. Please upload an image.");
      return;
    }

    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col">
      {label && <p className="mb-2 font-semibold">{label}:</p>}

      <button
        className={`bg-primary group flex h-80 items-center justify-center rounded-2xl border border-dashed p-4 ${error ? "border-red-500" : "border-border"}`}
        type="button"
        onClick={() => imageInputRef?.current?.click()}
        disabled={isDisabled}
      >
        {previewedImage || defaultImage ? (
          <figure className="relative h-full w-full rounded-lg">
            <Image
              src={previewedImage || String(defaultImage)}
              alt="project"
              className="h-full w-full rounded-lg object-cover"
              height={320}
              width={1020}
            />
          </figure>
        ) : (
          <ImagePlus size={100} color="rgb(155, 155, 155)" />
        )}

        <input
          type="file"
          ref={imageInputRef}
          className="hidden w-0"
          onChange={handleImageChange}
          accept="image/*"
          disabled={isDisabled}
        />
      </button>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}

export default ImageField;
