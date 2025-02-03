import LabeledIcon from "@app/_components/Common/LabeledIcon";
import LocationIcon from "@app/_components/icons/LocationIcon";
import { timeSince } from "@app/_lib/timeSince";

type GeneralInfoProps = {
  city: string;
  country: string;
  remoteJob: boolean;
  dateOpened: string;
};

function GeneralInfo({
  city,
  country,
  remoteJob,
  dateOpened,
}: GeneralInfoProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-gray-500 sm:text-base">
        {city} - {country}
      </span>
      {remoteJob ? (
        <>
          <span className="size-0.5 rounded-full bg-gray-200" />
          <LabeledIcon
            ghostText="Remote"
            ghostTextClassName="text-gray-500 text-sm sm:text-base"
            IconComponent={<LocationIcon className="stroke-primary-500" />}
          />
        </>
      ) : null}
      <span className="size-0.5 rounded-full bg-gray-200" />
      <span className="text-sm font-medium text-gray-500 sm:text-base">
        Posted {timeSince(dateOpened)}
      </span>
    </div>
  );
}

export default GeneralInfo;
