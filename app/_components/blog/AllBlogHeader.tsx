"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import ScreenHeader from "../Common/ScreenHeader";
import SearchInput from "../Common/SearchInput";
import { debounce } from "@app/_lib/debounce";

export default function AllBlogHeader() {
  const router = useRouter();
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const category = searchParams.get("category") || "";
  const isPopular = searchParams.get("isPopular") === "true" || false;
  const pageTitle = (
    category
      ? t(`blog:${category}`)
      : isPopular
        ? t("blog:popular-articles")
        : t("blog:recent-articles")
  ) as string;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    debounce(() => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set("search", e.target.value);
      const query = current.toString();
      router.push(`${window.location.pathname}?${query}`);
    }, 500)();
  };

  return (
    <ScreenHeader
      title={pageTitle}
      breadcrumbs={[
        { title: t("common:home-page"), href: "/" },
        {
          title: t("blog:blog-route"),
          href: "/blog-home",
        },
        { title: pageTitle },
      ]}
      endSideComponent={
        <SearchInput
          placeholder={t("blog:header.search-label")}
          value={search}
          onChange={handleSearchChange}
          containerClassName="lg:min-w-[528px] lg:min-h-[68px]"
        />
      }
    />
  );
}
