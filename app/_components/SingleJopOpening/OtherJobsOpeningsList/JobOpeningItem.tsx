import LabeledIcon from "@app/_components/Common/LabeledIcon";
import ActionsButtons from "@app/_components/SingleJopOpening/ActionsButtons";
import DollarCircleIcon from "@app/_components/icons/DollarCircleIcon";
import LocationIcon from "@app/_components/icons/LocationIcon";
import { OtherJobOpening } from "./OtherJobOpening";
import { formatSalary } from "@app/_lib/formatSalary";

type JobOpeningItemProps = { jobOpening: OtherJobOpening };

function JobOpeningItem({ jobOpening }: JobOpeningItemProps) {
  return (
    <li className="group flex w-full flex-col gap-6 rounded-xl bg-gray-0 p-6 first-of-type:bg-gray-700 dark:first-of-type:bg-gray-800">
      <div className="flex flex-col gap-4">
        <ActionsButtons
          bookmarkClassName="dark:group-first-of-type:border-gray-100"
          moreOptionsClassName="dark:group-first-of-type:border-gray-100"
        />
        <h4 className="text-lg font-bold text-gray-900 group-first-of-type:text-gray-0">
          {jobOpening.title}
        </h4>
      </div>

      <ul className="gap-5">
        {jobOpening.Remote_Job ? (
          <li>
            <LabeledIcon
              ghostText="Remote"
              ghostTextClassName="group-first-of-type:text-gray-0"
              IconComponent={
                <LocationIcon className="group-first-of-type:stroke-primary-500 dark:group-first-of-type:stroke-primary-600" />
              }
            />
          </li>
        ) : null}
        <li>
          <LabeledIcon
            boldText={formatSalary(jobOpening.Salary)}
            boldTextClassName="group-first-of-type:text-gray-0"
            ghostText="/Month"
            ghostTextClassName="group-first-of-type:text-gray-100"
            IconComponent={
              <DollarCircleIcon className="group-first-of-type:stroke-primary-500 dark:group-first-of-type:stroke-primary-600" />
            }
          />
        </li>
      </ul>
    </li>
  );
}

export default JobOpeningItem;
