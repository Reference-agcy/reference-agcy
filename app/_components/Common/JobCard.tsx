import React from "react";
import Link from "next/link";
import { ClassNameValue } from "tailwind-merge";
import { Badge } from "../ui/badge";
import { job } from "@/@types/jobs";
import { cn } from "@app/_lib/utils";

interface Props {
  job: job;
  className?: ClassNameValue;
}

export default function JobCard({ job, className = "" }: Props) {
  return (
    <Link
      href={`/job-openings/${job?.id}`}
      className={cn(
        "flex h-full flex-col gap-5 rounded-2xl bg-gray-0 px-6 py-8",
        className,
      )}
    >
      <h3 className="text-left text-2xl font-bold text-gray-900">
        {job?.Posting_Title}
      </h3>
      <div className="flex flex-wrap gap-1">
        {job?.Required_Skills?.split(",").map((skill, j) => (
          <Badge key={j}>{skill}</Badge>
        ))}
      </div>
      <p className="text-start">{job?.Job_Description}</p>
    </Link>
  );
}
