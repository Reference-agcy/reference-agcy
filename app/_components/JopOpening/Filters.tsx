"use client";

import React, { ChangeEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CustomeInput from "../Common/CustomeInput";
import DropDown from "../Common/DropDown";
import { debounce } from "@app/_lib/debounce";

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [jobType, setJobType] = useState(searchParams.get("jobType") || "");

  const locations = [
    {
      label: "Out sourcing",
      value: "out-sourcing",
    },
    {
      label: "In sourcing",
      value: "in-sourcing",
    },
  ];
  const jobTypes = [
    {
      label: "Full Time",
      value: "full-time",
    },
    {
      label: "Part Time",
      value: "part-time",
    },
    {
      label: "Internship",
      value: "internship",
    },
    {
      label: "Contract",
      value: "contract",
    },
  ];

  const updateURL = (params: { [key: string]: string }) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        current.set(key, value);
      } else {
        current.delete(key);
      }
    });

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${window.location.pathname}${query}`);
  };

  // Handle select changes
  const handleLocationChange = (value: string) => {
    setLocation(value);
    updateURL({ location: value });
  };

  const handleJobTypeChange = (value: string) => {
    setJobType(value);
    updateURL({ jobType: value });
  };
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    debounce(() => updateURL({ search: value }), 500)();
  };
  return (
    <div className="flex w-full gap-5 max-sm:flex-col" data-aos="fade-down">
      <CustomeInput
        label="Search"
        value={search}
        onChange={handleSearchChange}
      />
      <DropDown
        placeholder="Select Location"
        label="location"
        value={location}
        onChange={handleLocationChange}
        options={locations}
      />

      <DropDown
        label="Jop Type"
        placeholder="Select Job Type"
        value={jobType}
        onChange={handleJobTypeChange}
        options={jobTypes}
      />
    </div>
  );
};

export default Filters;
