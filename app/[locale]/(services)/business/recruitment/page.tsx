import initTranslations from "@app/[locale]/i18n";
import ContactZohoForm from "@app/_components/Common/ContactZohoForm";
import BenefitsSection from "@app/_components/Services/BenefitsSection";
import Container from "@app/_components/Services/Container";
import Header from "@app/_components/Services/Header";
import HeroSection from "@app/_components/Services/HeroSection";
import HowItWorksSection from "@app/_components/Services/HowItWorksSection";
import PageContainer from "@app/_components/Services/PageContainer";
import { defaultLocale } from "@/constants";
import HeroImage from "@/public/images/services/recruitment2.jpg";

type RecruitmentProps = {
  params: { locale: string };
};

async function Recruitment({ params: { locale } }: RecruitmentProps) {
  const { t } = await initTranslations(locale || defaultLocale);

  return (
    <PageContainer>
      <Header title={t("services:recruitment.title")} t={t} />
      <Container>
        <HeroSection
          topParagraph={t("services:recruitment.hero.top_paragraph")}
          image={HeroImage}
          bottomParagraph={t("services:recruitment.hero.bottom_paragraph")}
        />
        <BenefitsSection
          t={t}
          title={t("services:recruitment.benefits.title")}
          description={t("services:recruitment.benefits.description")}
          benefits={[
            t("services:recruitment.benefits.1.title"),
            t("services:recruitment.benefits.2.title"),
            t("services:recruitment.benefits.3.title"),
            t("services:recruitment.benefits.4.title"),
          ]}
        />
        <HowItWorksSection
          t={t}
          description={t("services:recruitment.how-it-works.description")}
        />
        <ContactZohoForm />
      </Container>
    </PageContainer>
  );
}

export default Recruitment;
