import initTranslations from "@app/[locale]/i18n";
import BenefitsSection from "@app/_components/Services/BenefitsSection";
import Container from "@app/_components/Services/Container";
import Header from "@app/_components/Services/Header";
import HeroSection from "@app/_components/Services/HeroSection";
import HowItWorksSection from "@app/_components/Services/HowItWorksSection";
import PageContainer from "@app/_components/Services/PageContainer";
import { defaultLocale } from "@/constants";
import HeroImage from "@/public/images/services/part-time.jpg";

type PartTimeOutsourceProps = {
  params: { locale: string };
};

async function PartTimeOutsource({
  params: { locale },
}: PartTimeOutsourceProps) {
  const { t } = await initTranslations(locale || defaultLocale);

  return (
    <PageContainer>
      <Header title={t("services:part-time-outsource.title")} t={t} />
      <Container>
        <HeroSection
          topParagraph={t("services:part-time-outsource.hero.top_paragraph")}
          image={HeroImage}
          bottomParagraph={t(
            "services:part-time-outsource.hero.bottom_paragraph",
          )}
        />
        <BenefitsSection
          t={t}
          title={t("services:part-time-outsource.benefits.title")}
          description={t("services:part-time-outsource.benefits.description")}
          benefits={[
            t("services:part-time-outsource.benefits.1.title"),
            t("services:part-time-outsource.benefits.2.title"),
            t("services:part-time-outsource.benefits.3.title"),
            t("services:part-time-outsource.benefits.4.title"),
          ]}
        />
        <HowItWorksSection
          t={t}
          description={t(
            "services:part-time-outsource.how-it-works.description",
          )}
        />
      </Container>
    </PageContainer>
  );
}

export default PartTimeOutsource;
