import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import JobCard from "../Common/JobCard";
import { job } from "@/@types/jobs";
import { getJobs } from "@app/_lib/apiJobs";
import { cn } from "@app/_lib/utils";

interface Props {
  t: (key: string) => string;
}

export default async function JobCards({ t }: Props) {
  // const data = await getJobs();
  // const jobs = data.data || DUMMY_JOBS;
  const jobs = DUMMY_JOBS;

  return jobs.length ? (
    <>
      <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job: job, i: number) => (
          <JobCard
            key={i}
            job={job}
            className={cn({
              "bg-gray-700 [&_>div_>div]:bg-[#D1FFF2] [&_>div_>div]:dark:bg-primary-300/20 [&_h3]:text-white [&_p]:text-[#CCD0DE]":
                i === 0,
            })}
          />
        ))}
      </div>

      <Link
        href={"/job-openings"}
        className="flex items-center gap-2 text-base leading-[24px] text-gray-900 transition-all hover:text-primary-500"
      >
        {t("candidate:jobs.viewMore")}
        <IoMdArrowForward className="text-2xl text-blue-500 lang-ar:rotate-180" />
      </Link>
    </>
  ) : (
    <p className="text-center text-lg italic text-gray-500">
      {t("candidate:jobs.noJobs")}
    </p>
  );
}

const DUMMY_JOBS = [
  {
    id: "1",
    Posting_Title: "Senior Software Developer",
    Job_Description:
      "Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts",
    Required_Skills: "React, Node.js, TypeScript",
  },
  {
    id: "2",

    Posting_Title: "Senior Software Developer",
    Job_Description:
      "Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts",
    Required_Skills: "Figma, Adobe XD, Photoshop",
  },
  {
    id: "3",
    Posting_Title: "Senior Software Developer",
    Job_Description:
      "Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts",
    Required_Skills: "Python, R, SQL",
  },
  {
    id: "4",
    Posting_Title: "Senior Software Developer",
    Job_Description:
      "Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts",
    Required_Skills: "Agile, Scrum, Kanban",
  },
];
