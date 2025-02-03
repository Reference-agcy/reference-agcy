import { i18n } from "i18next";
import { cookies } from "next/headers";
import { IoMdArrowDown } from "react-icons/io";
import ArticleWithOverlayImage from "./ArticleWithOverlayImage";
import { defaultLocale } from "@/constants";
import { getBlogs } from "@app/_lib/apiBlogs";
import Link from "next/link";

interface Props {
  t: i18n["t"];
}

export default async function PopularArticles({ t }: Props) {
  console.log(cookies().get("NEXT_LOCALE")?.value || defaultLocale);
  const data = await getBlogs(
    "limit=2&isPopular=true",
    cookies().get("NEXT_LOCALE")?.value || defaultLocale,
  );
  const blogs = data?.posts || [];

  if (!blogs.length) return null;
  return (
    <section className="flex flex-col gap-[1.375rem]" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-gray-900">
        {t("blog:popular-title")}
      </h2>

      <div className="flex items-center gap-5 max-md:flex-col">
        {blogs?.map((article, index) => (
          <ArticleWithOverlayImage
            key={index}
            article={article}
            t={t}
            className="max-md:h-[400px] max-md:w-full max-md:max-w-full md:max-w-[50%]"
            dataAos={`fade-${index % 2 === 0 ? "right" : "left"}`}
          />
        ))}
      </div>

      <Link href="/blog?isPopular=true" className="mx-auto flex items-center gap-2 text-base leading-[24px] text-gray-900 transition-all hover:text-primary-500">
        {t("blog:actions.view-more")}
        <IoMdArrowDown className="text-2xl text-blue-500" />
      </Link>
    </section>
  );
}
