"use client";

import React from "react";
import JobCard from "../Common/JobCard";
import Spinner from "../spinner";
import { useGetJobs } from "./useGetJobs";
import useFetchNextPageProps from "@app/_hooks/useFetchNextPage";

const JobsList = () => {
  const { data, isFetchingNextPage, isPending, hasNextPage, fetchNextPage } =
    useGetJobs();
  useFetchNextPageProps({
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  });
  const jobs = data?.pages.flatMap((page) => page.data) || [];
  return (
    <section data-aos="fade-up">
      <h2 className="mb-6 text-4xl font-bold tracking-tighter text-gray-900">
        Full-Time Jobs
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isPending ? (
          <div className="col-span-full flex justify-center px-8 py-6">
            <Spinner />
          </div>
        ) : (
          jobs?.map((job, i) => <JobCard key={i} job={job} />)
        )}
        {isFetchingNextPage && (
          <div className="col-span-full flex justify-center px-8 py-1">
            <Spinner />
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsList;
