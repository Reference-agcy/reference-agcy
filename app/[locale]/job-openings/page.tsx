import initTranslations from "../i18n";
import ScreenHeader from "@app/_components/Common/ScreenHeader";
import ZohoJobs from "@app/_components/JopOpening/ZohoJobs";

async function JopOpenings({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await initTranslations(locale);

  return (
    <div>
      <ScreenHeader
        title={`${t("jobs:jobs")} ${t("common:&")} ${t("jobs:vacancies")}`}
        breadcrumbs={[
          { title: t("common:home-page"), href: "/" },
          { title: t("common:candidates") },
          { title: t("jobs:jobs") },
        ]}
      />
      <div className="container pb-14">
        <ZohoJobs />
      </div>
    </div>
  );
}

export default JopOpenings;
