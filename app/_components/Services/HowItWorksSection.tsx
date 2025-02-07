import { i18n } from "i18next";

type HowItWorksSectionProps = {
  t: i18n["t"];
  description: string;
};

function HowItWorksSection({ t, description }: HowItWorksSectionProps) {
  return (
    <section className="flex flex-col gap-[1.375rem]">
      <h2 className="text-[2rem] font-bold text-gray-900">
        {t("services:how-it-works")}
      </h2>
      <p
        className="text-lg text-gray-200"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
}

export default HowItWorksSection;
