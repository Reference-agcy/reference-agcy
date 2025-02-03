import LabeledIcon from "@app/_components/Common/LabeledIcon";
import BriefcaseIcon from "@app/_components/icons/BriefcaseIcon";
import DollarCircleIcon from "@app/_components/icons/DollarCircleIcon";
import FlagIcon from "@app/_components/icons/FlagIcon";
import UserTickIcon from "@app/_components/icons/UserTickIcon";
import { formatSalary } from "@app/_lib/formatSalary";

type JobInfoProps = {
  jobType: string;
  workExperience: string;
  workLevel: string;
  salary: string;
};

function JobInfo({ jobType, salary, workExperience, workLevel }: JobInfoProps) {
  return (
    <ul className="flex items-center gap-5 rounded-xl border border-gray-200/35 px-5 py-5 max-sm:flex-col">
      <li className="flex grow flex-col gap-2 max-sm:items-center">
        <h5 className="text-sm text-gray-500">Experience</h5>
        <LabeledIcon
          boldText={workExperience}
          IconComponent={<UserTickIcon className="size-[1.125rem]" />}
        />
      </li>

      <div className="h-0.5 w-3/4 bg-gray-200/35 sm:h-8 sm:w-0.5" />

      <li className="flex grow flex-col gap-2 max-sm:items-center">
        <h5 className="text-sm text-gray-500">Work Level</h5>
        <LabeledIcon
          boldText={workLevel}
          IconComponent={<FlagIcon className="size-[1.125rem]" />}
        />
      </li>

      <div className="h-0.5 w-3/4 bg-gray-200/35 sm:h-8 sm:w-0.5" />

      <li className="flex grow flex-col gap-2 max-sm:items-center">
        <h5 className="text-sm text-gray-500">Employee Type</h5>
        <LabeledIcon
          boldText={jobType}
          IconComponent={<BriefcaseIcon className="size-[1.125rem]" />}
        />
      </li>

      <div className="h-0.5 w-3/4 bg-gray-200/35 sm:h-8 sm:w-0.5" />

      <li className="flex grow flex-col gap-2 max-sm:items-center">
        <h5 className="text-sm text-gray-500">Offer Salary</h5>
        <LabeledIcon
          boldText={formatSalary(salary)}
          ghostText="/Month"
          IconComponent={<DollarCircleIcon className="size-[1.125rem]" />}
        />
      </li>
    </ul>
  );
}

export default JobInfo;
