import { i18n } from "i18next";
import { cookies } from "next/headers";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";
import HorizontalArticle from "./HorizontalArticle";
import { defaultLocale } from "@/constants";
import { getBlogs } from "@app/_lib/apiBlogs";

interface Props {
  t: i18n["t"];
}

export default async function HorizontalRecentlyArticles({ t }: Props) {
  const data = await getBlogs(
    "limit=3&page=2",
    cookies().get("NEXT_LOCALE")?.value || defaultLocale,
  );
  const blogs = data?.posts || [];

  if (!blogs.length) return null;
  return (
    <section className="flex flex-col gap-[1.375rem]" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-gray-900">
        {t("common:articles-title")}
      </h2>

      <div className="flex flex-col gap-[30px]">
        {blogs.map((article, index) => (
          <HorizontalArticle
            key={index}
            article={article}
            index={index}
            dataAos="fade-up"
            className="w-full max-md:flex-col [&_a]:w-full [&_a]:text-3xl [&_img]:h-[240px] [&_img]:w-[295px] [&_img]:max-w-full max-md:[&_img]:w-full"
          />
        ))}
      </div>

      <Link
        href="/blog"
        className="mx-auto flex items-center gap-2 text-base leading-[24px] text-gray-900 transition-all hover:text-primary-500"
      >
        {t("blog:actions.view-more")}
        <IoMdArrowDown className="text-2xl text-blue-500" />
      </Link>
    </section>
  );
}
