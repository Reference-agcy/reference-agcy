import React from "react";
import Link from "next/link";
import { FaAward } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { TbChartArcs3 } from "react-icons/tb";
import { TbBriefcase } from "react-icons/tb";
import FeatureItem from "../Common/FeatureItem";

interface Props {
  t: (key: string) => string;
}
const OurValues = ({ t }: Props) => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureItem
            dataAos="fade-up"
            icon={<TbBriefcase />}
            title={t("about:values.high-quality-jobs.title")}
            description={t("about:values.high-quality-jobs.description")}
            endSectionComponent={
              <Link
                href={"/job-openings"}
                className="mt-auto flex items-center gap-3 text-lg font-bold text-gray-900 transition-all hover:text-primary-500"
              >
                {t("about:values.high-quality-jobs.link")}
                <IoMdArrowForward className="text-2xl text-blue-500 lang-ar:rotate-180" />
              </Link>
            }
          />
          <FeatureItem
            dataAos="fade-up"
            dataAosDelay="200"
            icon={<TbChartArcs3 />}
            title={t("about:values.company-research.title")}
            description={t("about:values.company-research.description")}
            endSectionComponent={
              <Link
                href={"/job-openings"}
                className="mt-auto flex items-center gap-3 text-lg font-bold text-gray-900 transition-all hover:text-primary-500"
              >
                {t("about:values.company-research.link")}
                <IoMdArrowForward className="text-2xl text-blue-500 lang-ar:rotate-180" />
              </Link>
            }
          />
          <FeatureItem
            dataAos="fade-up"
            dataAosDelay="400"
            icon={<FaAward />}
            title={t("about:values.quality-resources.title")}
            description={t("about:values.quality-resources.description")}
            endSectionComponent={
              <Link
                href={"/job-openings"}
                className="mt-auto flex items-center gap-3 text-lg font-bold text-gray-900 transition-all hover:text-primary-500"
              >
                {t("about:values.quality-resources.link")}
                <IoMdArrowForward className="text-2xl text-blue-500 lang-ar:rotate-180" />
              </Link>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OurValues;
