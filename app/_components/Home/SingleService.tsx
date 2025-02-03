import React, { ReactNode } from "react";
import { cn } from "@app/_lib/utils";

interface Props {
  dataAos?: string;
  title: string;
  text: string;
  actionBtn: ReactNode;
  className?: string;
}
const SingleService = ({
  title,
  text,
  actionBtn,
  className,
  dataAos,
}: Props) => {
  return (
    <div
      data-aos={dataAos}
      className={cn(
        "col-span-2 row-span-1 flex flex-col justify-between gap-5 rounded-3xl bg-gray-700 px-6 py-8 text-gray-0 md:col-span-1",
        className,
      )}
    >
      <div className="max-w-[22rem] space-y-5">
        <h2 className="text-3xl font-bold leading-snug 2xl:text-4xl">
          {title}
        </h2>
        <p className="text-base 2xl:text-xl">{text}</p>
      </div>
      {actionBtn}
    </div>
  );
};

export default SingleService;
