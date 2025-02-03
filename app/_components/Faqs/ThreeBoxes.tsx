import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import FeatureItem from "../Common/FeatureItem";

interface Props {
  t: (key: string) => string;
}
const ThreeBoxes = ({ t }: Props) => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureItem
            dataAos="fade-up"
            icon={<AiOutlineUser className="text-[#3860E2]" />}
            title={t("faqs:boxes.account.title")}
            description={t("faqs:boxes.account.description")}
          />
          <FeatureItem
            dataAos="fade-up"
            dataAosDelay="200"
            icon={<IoMailOutline className="text-[#3860E2]" />}
            title={t("faqs:boxes.email.title")}
            description={t("faqs:boxes.email.description")}
          />
          <FeatureItem
            dataAos="fade-up"
            dataAosDelay="400"
            icon={<LuGraduationCap className="text-[#3860E2]" />}
            title={t("faqs:boxes.academy.title")}
            description={t("faqs:boxes.academy.description")}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeBoxes;
