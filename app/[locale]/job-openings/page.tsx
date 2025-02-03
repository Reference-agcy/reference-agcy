import initTranslations from "../i18n";
import ScreenHeader from "@app/_components/Common/ScreenHeader";
import Categories from "@app/_components/JopOpening/Categories";
import Filters from "@app/_components/JopOpening/Filters";
import JobsList from "@app/_components/JopOpening/JobsList";

async function JopOpenings({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await initTranslations(locale);

  return (
    <div data-aos="fade-in">
      <ScreenHeader
        title={`${t("jobs:jobs")} ${t("common:&")} ${t("jobs:vacancies")}`}
        breadcrumbs={[
          { title: t("common:home-page"), href: "/" },
          { title: t("common:candidates") },
          { title: t("jobs:jobs") },
        ]}
      />
      <div className="container pb-14">
        <div className="grid gap-7 lg:grid-cols-[14rem_1fr]">
          <Categories />
          <div className="space-y-6">
            <Filters />
            <JobsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JopOpenings;
