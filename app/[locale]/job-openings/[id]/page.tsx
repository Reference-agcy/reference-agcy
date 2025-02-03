import initTranslations from "@app/[locale]/i18n";
import ScreenHeader from "@app/_components/Common/ScreenHeader";
import JopOpeningDetails from "@app/_components/SingleJopOpening/JopOpeningDetails";
import OtherJobsOpeningsList from "@app/_components/SingleJopOpening/OtherJobsOpeningsList";

type JopOpeningProps = {
  params: Promise<{ id: string; locale: string }>;
};

async function JopOpening({ params }: JopOpeningProps) {
  const { id, locale } = await params;
  const { t } = await initTranslations(locale);
  // TODO: Fetch job opening details by id
  // TODO: Fetch other job openings by category (or any other criteria) with infinite scrolling

  return (
    <div className="mb-[3.125rem] bg-gray-100">
      <ScreenHeader
        title={JOP_OPENING_DETAILS.Job_Opening_Name}
        breadcrumbs={[
          { title: t("common:home-page"), href: "/" },
          { title: t("common:candidates") },
          { title: t("jobs:jobs"), href: "/job-openings" },
          { title: JOP_OPENING_DETAILS.Job_Opening_Name },
        ]}
      />

      <div
        className="container !flex-col-reverse items-start gap-[1.375rem] md:!flex-row"
        dir="ltr"
      >
        <OtherJobsOpeningsList data={OTHER_JOBS} id={id} />
        <JopOpeningDetails data={JOP_OPENING_DETAILS} />
      </div>
    </div>
  );
}

export default JopOpening;

const JOP_OPENING_DETAILS = {
  Job_Opening_Name: "Illustrator Director",
  City: "Monshaat",
  Country: "Saudi Arabia",
  Job_Type: "Full time",
  Date_Opened: "2025-01-21",
  Job_Opening_Status: "",
  Remote_Job: true,
  Required_Skills: "PHP, Full Stack",
  Work_Experience: "2 years",
  Work_Level: "Senior",
  Salary: "25000",
  Job_Description:
    "<p>I’m looking for a good designer as partner to work together on projects, that wants to expand his knowledge into the UX/UI and product area to collaborate on medium size projects. We will start with 20 hours per week and we might extend to full time after 2-3 months. First project is on financial instruments with blockchain as backend technology.</p>",
  Requirements: `
  <ul>
    <li><span>On-site in United Arab Emirates</span></li>
    <li><span>Have good communication skills and team working skill.</span></li>
    <li><span>Know the principal of animation and you can create high quality prototypes.</span></li>
    <li><span>Following design system guidelines</span></li>
    <li><span>Figma, Xd & Sketch know about this app.</span></li>
  </ul>
  `,
};

const OTHER_JOBS = [
  {
    title: "Illustrator Director",
    Remote_Job: true,
    Salary: "50000",
  },
  {
    title: "Illustrator Director",
    Remote_Job: true,
    Salary: "50000",
  },
  {
    title: "Illustrator Director",
    Remote_Job: true,
    Salary: "50000",
  },
  {
    title: "Illustrator Director",
    Remote_Job: true,
    Salary: "50000",
  },
];
