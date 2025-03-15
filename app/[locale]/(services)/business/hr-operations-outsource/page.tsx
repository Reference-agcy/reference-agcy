import initTranslations from "@app/[locale]/i18n";
import ContactZohoForm from "@app/_components/Common/ContactZohoForm";
import BenefitsSection from "@app/_components/Services/BenefitsSection";
import Container from "@app/_components/Services/Container";
import Header from "@app/_components/Services/Header";
import HeroSection from "@app/_components/Services/HeroSection";
import HowItWorksSection from "@app/_components/Services/HowItWorksSection";
import PageContainer from "@app/_components/Services/PageContainer";
import { defaultLocale } from "@/constants";
import HeroImage from "@/public/images/services/hr-operations-outsource.jpg";

type HROperationsOutsourceProps = {
  params: { locale: string };
};

async function HROperationsOutsource({
  params: { locale },
}: HROperationsOutsourceProps) {
  const { t } = await initTranslations(locale || defaultLocale);

  return (
    <PageContainer>
      <Header title={t("services:hr-operations-outsource.title")} t={t} />
      <Container>
        <HeroSection
          topParagraph={t(
            "services:hr-operations-outsource.hero.top_paragraph",
          )}
          image={HeroImage}
          bottomParagraph={t(
            "services:hr-operations-outsource.hero.bottom_paragraph",
          )}
        />
        <BenefitsSection
          t={t}
          title={t("services:hr-operations-outsource.benefits.title")}
          description={t(
            "services:hr-operations-outsource.benefits.description",
          )}
          benefits={[
            t("services:hr-operations-outsource.benefits.1.title"),
            t("services:hr-operations-outsource.benefits.2.title"),
            t("services:hr-operations-outsource.benefits.3.title"),
            t("services:hr-operations-outsource.benefits.4.title"),
          ]}
        />
        <HowItWorksSection
          t={t}
          description={t(
            "services:hr-operations-outsource.how-it-works.description",
          )}
        />
        <ContactZohoForm />
      </Container>
    </PageContainer>
  );
}

export default HROperationsOutsource;
