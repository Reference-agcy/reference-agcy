import React from "react";
import { i18n } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import LearnMoreOverlay from "./LearnMoreOverlay";
import { Post } from "@/@types/articles";

interface Props {
  index: number;
  article: Post;
  t: i18n["t"];
}
const ArticleCard = ({ index, article, t }: Props) => {
  return (
    <div
      className="group"
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="relative mb-5 overflow-hidden rounded-2xl">
        <LearnMoreOverlay t={t} link={`/blog/${article.slug}`} />
        <div className="absolute inset-0 z-[10] flex scale-0 items-center justify-center rounded-2xl bg-black/50 transition-all duration-300 group-hover:scale-100">
          <Link href={`/blog/${article.slug}`}>
            <Button>{t("home:actions.learn-more")}</Button>
          </Link>
        </div>
        <Image
          src={article.thumbnail}
          alt={article.title}
          width={345}
          height={300}
          className="h-[18.75rem] w-full object-cover md:min-w-[21.5625rem]"
        />
      </div>
      <Link
        href={`/blog/${article.slug}`}
        className="ms-1 text-2xl font-bold text-gray-900 transition-all hover:text-primary-600 2xl:text-3xl"
      >
        {article.title}
      </Link>
    </div>
  );
};

export default ArticleCard;
