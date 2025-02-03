import React from "react";
import { i18n } from "i18next";
import { cookies } from "next/headers";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import ArticleCard from "./ArticleCard";
import { defaultLocale } from "@/constants";
import { getBlogs } from "@app/_lib/apiBlogs";
import { cn } from "@app/_lib/utils";

interface Props {
  t: i18n["t"];
  className?: string;
  viewAllLink?: {
    href: string;
    title: string;
  };
}
const RecentArticles = async ({ t, className = "", viewAllLink }: Props) => {
  const data = await getBlogs(
    "limit=3",
    cookies().get("NEXT_LOCALE")?.value || defaultLocale,
  );
  const blogs = data?.posts || [];

  if (!blogs.length) return null;
  return (
    <div className={cn(className)} id="recent-articles">
      <div
        data-aos="fade-up"
        className="mb-6 flex w-full items-center justify-between gap-5"
      >
        <h2 className="text-4xl font-bold text-gray-900 2xl:text-5xl">
          {t("common:articles-title")}
        </h2>

        {viewAllLink && (
          <Link
            href={viewAllLink.href}
            className="flex items-center gap-2 text-base leading-[24px] text-gray-900 transition-all hover:text-primary-500"
          >
            {viewAllLink.title}
            <IoMdArrowForward className="text-2xl text-blue-500 lang-ar:rotate-180" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((article, index) => (
          <ArticleCard t={t} article={article} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
// const articles = [
//   {
//     title: t("common:article-1-title"),
//     image: blogImg,
//     url: "/articles/how-to-build-a-website",
//   },
//   {
//     title: t("common:article-2-title"),
//     image: blogImg,
//     url: "/articles/how-to-build-a-website",
//   },
//   {
//     title: t("common:article-3-title"),
//     image: blogImg,
//     url: "/articles/how-to-build-a-website",
//   },
// ];
