"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import ScreenHeader from "../Common/ScreenHeader";
import SearchInput from "../Common/SearchInput";
import { debounce } from "@app/_lib/debounce";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const { t } = useTranslation();

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
      title={`${t("blog:header.title")}`}
      breadcrumbs={[
        { title: t("common:home-page"), href: "/" },
        { title: t("blog:blog-route") },
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
