import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import FeatureItem from "../Common/FeatureItem";

interface Props {
  t: (key: string) => string;
}
const ContactInfo = ({ t }: Props) => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureItem
            dataAos="fade-up"
            icon={<AiOutlineUser />}
            title={t("faqs:contact.phone.title")}
            description={t("faqs:contact.phone.description")}
          />
          <FeatureItem
            dataAos="fade-up"
            dataAosDelay="200"
            icon={<IoMailOutline />}
            title={t("faqs:contact.email.title")}
            description={t("faqs:contact.email.description")}
          />
          <FeatureItem
            dataAos="fade-up"
            dataAosDelay="400"
            icon={<LuGraduationCap />}
            title={t("faqs:contact.community.title")}
            description={t("faqs:contact.community.description")}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
