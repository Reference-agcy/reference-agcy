import { i18n } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@app/_components/ui/button";
import BookIcon from "@/public/icons/services/benefits/four.svg";
import HeartIcon from "@/public/icons/services/benefits/one.svg";
import PotIcon from "@/public/icons/services/benefits/three.svg";
import Profile2Users from "@/public/icons/services/benefits/two.svg";

type BenefitsSectionProps = {
  t: i18n["t"];
  title: string;
  description: string;
  benefits: string[];
};

const benefitIcons = [HeartIcon, Profile2Users, PotIcon, BookIcon];

function BenefitsSection({
  t,
  title,
  description,
  benefits,
}: BenefitsSectionProps) {
  return (
    <section className="flex items-center gap-[2.8125rem] max-sm:flex-col">
      <div className="sm:w-2/5">
        <h2 className="mb-5 text-lg font-semibold text-gray-600">
          {t("services:benefits")}
        </h2>
        <h3 className="mb-[1.875rem] text-[2rem] font-bold text-gray-900">
          {title}
        </h3>
        <p className="mb-[3.125rem] text-lg text-gray-200">{description}</p>
        <Link href="#start-now">
          <Button variant="secondary">{t("services:start-now")}</Button>
        </Link>
      </div>
      <div className="grid w-full gap-5 xs:grid-cols-2 sm:w-3/5">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col gap-2.5 rounded-2xl bg-gray-0 p-6"
          >
            <figure className="flex size-14 items-center justify-center rounded-full bg-gray-600">
              <Image
                src={benefitIcons[index]}
                alt="icon"
                width={26}
                height={26}
              />
            </figure>
            <h4 className="text-xl font-medium text-gray-900">{benefit}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BenefitsSection;
