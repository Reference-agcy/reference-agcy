"use client";

import { useQuery } from "@tanstack/react-query";
import { FaArrowDown } from "react-icons/fa6";
import { Button } from "@app/_components/ui/button";
import JobOpeningItem from "./JobOpeningItem";
import { OtherJobOpening } from "./OtherJobOpening";
import { getJob } from "@app/_lib/apiJob";

type OtherJobsListProps = {
  data: OtherJobOpening[];
  id: string;
};

function OtherJobsOpeningsList({ data, id }: OtherJobsListProps) {
  const { data: test } = useQuery({
    queryKey: ["job-opening"],
    queryFn: getJob(id),
  });
  console.log(test);

  return (
    <aside className="flex flex-col gap-[1.375rem] max-md:w-full">
      <ul className="grid grid-cols-1 gap-[1.375rem] sm:grid-cols-2 md:w-[252px] md:grid-cols-1">
        {data.map((jobOpening, index) => (
          <JobOpeningItem
            key={`other-job-opening-${index}`}
            jobOpening={jobOpening}
          />
        ))}
      </ul>

      <Button variant="ghost" className="h-auto p-0 text-gray-800">
        View More <FaArrowDown className="size-6 fill-primary-500" />
      </Button>
    </aside>
  );
}

export default OtherJobsOpeningsList;
