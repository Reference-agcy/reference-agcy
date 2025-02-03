import initTranslations from "./i18n";
import { Suspense } from "react";
import CaseStudy from "@app/_components/Common/CaseStudy";
import Hero from "@app/_components/Common/Hero";
import RecentArticles from "@app/_components/Common/RecentArticles";
import OurValuedClients from "@app/_components/Home/OurValuedClients";
import Services from "@app/_components/Home/Services";
import Spinner from "@app/_components/spinner";
import { Button } from "@app/_components/ui/button";
import { defaultLocale } from "@/constants";

interface PageProps {
  params: { locale: string };
}
export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale || defaultLocale);
  return (
    <div className="animate-fade-up bg-gray-100">
      <div className="container space-y-6 pb-14 max-md:space-y-12">
        <Hero
          title={t("home:hero.title")}
          description={t("home:hero.description")}
          subtitle={t("home:hero.subtitle")}
          actions={
            <div className="flex gap-4 max-lg:justify-center">
              <Button variant={"secondary"}>{t("home:hero.learnMore")}</Button>
              <Button>{t("home:hero.contactUs")}</Button>
            </div>
          }
        />
        <Services t={t} />
        <OurValuedClients t={t} />
        <CaseStudy t={t} />
        <Suspense
          fallback={
            <div className="col-span-full flex justify-center px-8 py-1">
              <Spinner />
            </div>
          }
        >
          <RecentArticles t={t} />
        </Suspense>
      </div>
    </div>
  );
}
