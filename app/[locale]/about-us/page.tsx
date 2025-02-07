import initTranslations from "../i18n";
import Hero from "@app/_components/About/Hero";
import OurValues from "@app/_components/About/OurValues";
import Testimonials from "@app/_components/About/Testimonials";
import ScreenHeader from "@app/_components/Common/ScreenHeader";
import { defaultLocale } from "@/constants";

type AboutUsProps = {
  params: { locale: string };
};

async function AboutUs({ params: { locale } }: AboutUsProps) {
  const { t } = await initTranslations(locale || defaultLocale);

  return (
    <main className="animate-fade-left">
      <ScreenHeader
        title={`${t("common:about-us")}`}
        breadcrumbs={[
          { title: t("common:home-page"), href: "/" },
          { title: t("common:about-us") },
        ]}
      />
      <Hero t={t} />
      <OurValues t={t} />
      <Testimonials />
    </main>
  );
}

export default AboutUs;
