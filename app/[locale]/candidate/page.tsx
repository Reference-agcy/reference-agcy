import initTranslations from "../i18n";
import Jobs from "@app/_components/Candidate/Jobs";
import RecruitmentProcess from "@app/_components/Candidate/RecruitmentProcess";
import CaseStudy from "@app/_components/Common/CaseStudy";
import Hero from "@app/_components/Common/Hero";
import RecentArticles from "@app/_components/Common/RecentArticles";
import SingleServiceWithImage from "@app/_components/Common/SingleServiceWithImage";
import { Button } from "@app/_components/ui/button";

async function Candidate({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await initTranslations(locale);

  return (
    <div className="animate-fade-up overflow-hidden bg-gray-100">
      <div className="tracking container space-y-6 pb-6 max-md:space-y-12">
        <Hero
          title={t("candidate:hero.title")}
          titleClassName="xl:text-4xl lg:text-2xl 2xl:text-[4.83rem] 2xl:leading-[5.5rem]"
          description={t("candidate:hero.description")}
          subtitle={t("candidate:hero.subtitle")}
          actions={<Button>{t("candidate:hero.submitResume")}</Button>}
        />
        <Jobs t={t} />
        <SingleServiceWithImage
          dataAos="fade-up"
          imageUrl={"/images/candidate/submit-resume.png"}
          className="w-full"
          title={t("candidate:resumeService.title")}
          text={t("candidate:resumeService.description")}
          btn={
            <Button className="w-fit">
              {t("candidate:resumeService.submit")}
            </Button>
          }
          hasGradient={true}
        />
        <RecruitmentProcess t={t} />
        <CaseStudy t={t} />
        <RecentArticles t={t} />
      </div>
    </div>
  );
}

export default Candidate;
