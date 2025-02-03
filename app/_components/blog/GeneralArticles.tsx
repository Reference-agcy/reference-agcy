import { i18n } from "i18next";
import { cookies } from "next/headers";
import ArticleWithOverlayImage from "./ArticleWithOverlayImage";
import HorizontalArticle from "./HorizontalArticle";
import { defaultLocale } from "@/constants";
import { getBlogs } from "@app/_lib/apiBlogs";

interface Props {
  t: i18n["t"];
}

export default async function GeneralArticles({ t }: Props) {
  const data = await getBlogs(
    "limit=4&skip=3",
    cookies().get("NEXT_LOCALE")?.value || defaultLocale,
  );
  const blogs = data?.posts || [];

  if (!blogs.length) return null;
  return (
    <section className="flex gap-7 max-lg:flex-col lg:items-start">
      <ArticleWithOverlayImage
        dataAos="fade-right"
        article={blogs[0]}
        t={t}
        className="max-lg:h-[400px] max-lg:w-full max-lg:max-w-full lg:max-w-[50%]"
      />

      <div className="flex flex-col gap-[30px] lg:w-1/2" data-aos="fade-left">
        {blogs.slice(1).map((article, index) => (
          <HorizontalArticle key={index} article={article} index={index} />
        ))}
      </div>
    </section>
  );
}
