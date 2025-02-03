import React, { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@app/_lib/utils";

interface Props {
  dataAos?: string;
  imageUrl: string;
  title: string;
  text: string;
  hasGradient?: boolean;
  className?: string;
  btn: ReactNode;
}
const SingleServiceWithImage = ({
  dataAos,
  imageUrl,
  title,
  text,
  hasGradient = true,
  className,
  btn,
}: Props) => {
  return (
    <div
      data-aos={dataAos}
      className={cn(
        "relative z-10 flex flex-col justify-end gap-6 overflow-hidden rounded-3xl px-8 py-8 text-white after:absolute after:inset-0 after:z-[-1] after:bg-black/40 max-lg:gap-6 max-lg:py-12",
        className,
      )}
    >
      <h2 className="text-4xl font-bold 2xl:text-5xl">{title}</h2>
      <p className="max-w-[40rem] text-lg 2xl:text-xl">{text}</p>
      {btn}
      <Image
        className="z-[-5] w-full object-cover object-[50%,70%] grayscale"
        fill
        src={imageUrl}
        alt={title}
      />
      {hasGradient && (
        <div className="absolute bottom-0 left-0 z-[-1] h-[50%] w-full bg-gradient-to-t from-black to-transparent"></div>
      )}
    </div>
  );
};

export default SingleServiceWithImage;
