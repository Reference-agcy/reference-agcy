import initTranslations from "../i18n";
import { cookies } from "next/headers";
import ScreenHeader from "@app/_components/Common/ScreenHeader";
import ContactInfo from "@app/_components/Faqs/ContactInfo";
import ThreeBoxes from "@app/_components/Faqs/ThreeBoxes";
import { defaultLocale } from "@/constants";
import FaqsAccordion from "@app/_components/Faqs/FaqsAccordion";

async function AboutUs() {
  const lang = cookies().get("lang")?.value || defaultLocale;
  const { t } = await initTranslations(lang);
  return (
    <main className="animate-fade-left">
      <ScreenHeader
        title={t("faqs:title")}
        breadcrumbs={[
          { title: t("common:home-page"), href: "/" },
          { title: "FAQs" },
        ]}
      />
      <section className="container py-8">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          {t("faqs:account-section-title")}
        </h2>
        <p className="text-lg text-gray-300 2xl:text-xl" data-aos="fade-up">
          {t("faqs:account-section-desc")}
        </p>
      </section>
      <ThreeBoxes t={t} />
      <FaqsAccordion t={t} />
      <ContactInfo t={t} />
    </main>
  );
}

export default AboutUs;
