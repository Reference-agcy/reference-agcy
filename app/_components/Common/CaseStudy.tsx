import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import caseStudyImg from "@/public/images/home/case-study.jpg";

interface Props {
  t: (key: string) => string;
}
const CaseStudy = ({ t }: Props) => {
  return (
    <div className="grid gap-10 lg:grid-cols-[auto_1fr]">
      <div
        className="max-w-[40rem] xl:max-w-[25rem] 2xl:max-w-[35rem]"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h3 className="mb-2 text-lg font-bold text-gray-300 dark:text-gray-500 2xl:text-xl">
          {t("common:case-study-label")}
        </h3>
        <p className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-900 lg:text-4xl 2xl:text-5xl">
          {t("common:case-study-title")}
        </p>
      </div>
      <div className="relative w-full" data-aos="fade-right">
        <Image
          className="w-full rounded-[1.8rem] grayscale"
          src={caseStudyImg}
          alt="case study"
        />
        <button
          className="absolute left-1/2 top-1/2 z-10 flex aspect-square w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg text-gray-300 after:absolute after:z-[-1] after:h-full after:w-full after:animate-ping after:rounded-full after:bg-primary-500"
          aria-label={t("common:case-study-action.watch-video")}
        >
          <FaPlay />
        </button>
      </div>
    </div>
  );
};

export default CaseStudy;
