import initTranslations from "@app/[locale]/i18n";
import ContactZohoForm from "@app/_components/Common/ContactZohoForm";
import BenefitsSection from "@app/_components/Services/BenefitsSection";
import Container from "@app/_components/Services/Container";
import Header from "@app/_components/Services/Header";
import HeroSection from "@app/_components/Services/HeroSection";
import HowItWorksSection from "@app/_components/Services/HowItWorksSection";
import PageContainer from "@app/_components/Services/PageContainer";
import { defaultLocale } from "@/constants";
import HeroImage from "@/public/images/services/hr-consultation.jpg";

type HRConsultationProps = {
  params: { locale: string };
};

async function HRConsultation({ params: { locale } }: HRConsultationProps) {
  const { t } = await initTranslations(locale || defaultLocale);

  return (
    <PageContainer>
      <Header title={t("services:hr-consultation.title")} t={t} />
      <Container>
        <HeroSection
          topParagraph={t("services:hr-consultation.hero.top_paragraph")}
          image={HeroImage}
          bottomParagraph={t("services:hr-consultation.hero.bottom_paragraph")}
        />
        <BenefitsSection
          t={t}
          title={t("services:hr-consultation.benefits.title")}
          description={t("services:hr-consultation.benefits.description")}
          benefits={[
            t("services:hr-consultation.benefits.1.title"),
            t("services:hr-consultation.benefits.2.title"),
            t("services:hr-consultation.benefits.3.title"),
            t("services:hr-consultation.benefits.4.title"),
          ]}
        />
        <HowItWorksSection
          t={t}
          description={t("services:hr-consultation.how-it-works.description")}
        />
        <ContactZohoForm />
      </Container>
    </PageContainer>
  );
}

export default HRConsultation;
