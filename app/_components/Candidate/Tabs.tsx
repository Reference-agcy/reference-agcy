"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Button } from "@app/_components/ui/button";

export default function Tabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("jobType") || "development";
  const { t } = useTranslation();

  const handleTabClick = (jobType: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("jobType", jobType);
    router.push(`?${params.toString()}`);
  };

  return (
    <div
      data-aos="fade-down"
      className="flex w-full items-center justify-center gap-3"
    >
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => handleTabClick(category)}
          variant={activeTab === category ? "secondary" : "third"}
          className="!px-4 !py-3 !text-sm min-w-[79px]"
        >
          {t(`candidate:jobs.tabs.${category}`)}
        </Button>
      ))}
    </div>
  );
}

const categories = ["development", "product", "design"];
