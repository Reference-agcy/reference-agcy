import RichTextRenderer from "@app/_components/Common/RichTextRenderer";
import CTASection from "./CTASection";
import GeneralInfo from "./GeneralInfo";
import Header from "./Header";
import JobInfo from "./JobInfo";
import RequiredSkills from "./RequiredSkills";

type JopOpeningDetailsProps = {
  data: {
    Job_Opening_Name: string;
    City: string;
    Country: string;
    Job_Type: string;
    Date_Opened: string;
    Job_Opening_Status: string;
    Remote_Job: boolean;
    Required_Skills: string;
    Work_Experience: string;
    Work_Level: string;
    Salary: string;
    Job_Description: string;
    Requirements: string;
  };
};

function JopOpeningDetails({ data }: JopOpeningDetailsProps) {
  return (
    <div className="flex grow flex-col gap-5 rounded-xl bg-gray-0 px-6 py-8 max-md:w-full">
      <Header jobTitle={data.Job_Opening_Name} />

      <GeneralInfo
        city={data.City}
        country={data.Country}
        remoteJob={data.Remote_Job}
        dateOpened={data.Date_Opened}
      />

      <RequiredSkills requiredSkills={data.Required_Skills} />

      <JobInfo
        jobType={data.Job_Type}
        salary={data.Salary}
        workExperience={data.Work_Experience}
        workLevel={data.Work_Level}
      />

      <h3 className="text-xl font-bold text-gray-800">Education</h3>
      <RichTextRenderer content={data.Job_Description} />

      <h3 className="text-xl font-bold text-gray-800">Requirements</h3>
      <RichTextRenderer content={data.Requirements} />

      <div className="h-px w-full bg-gray-200/35" />

      <CTASection />
    </div>
  );
}

export default JopOpeningDetails;
