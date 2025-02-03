import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/@types/articles";
import { removeHTMLTags } from "@app/_lib/removeHTMLTags";
import { truncate } from "@app/_lib/truncate";
import { cn } from "@app/_lib/utils";

interface Props {
  index: number;
  article: Post;
  className?: string;
  dataAos?: string;
}

export default function HorizontalArticle({
  index,
  article,
  className = "",
  dataAos,
}: Props) {
  return (
    <div
      className={cn("flex items-center gap-6 max-sm:flex-col", className)}
      data-aos={dataAos}
      data-aos-delay={index * 100}
    >
      <Image
        src={article?.thumbnail}
        alt={article?.title}
        className="h-[176px] w-full max-w-[190px] rounded-2xl object-cover max-lg:w-1/2 max-lg:max-w-full max-sm:w-full"
        width={190}
        height={176}
      />

      <div className="flex flex-col gap-4 max-lg:w-1/2 max-sm:w-full">
        <Link
          href={`blog/${article?.slug}`}
          className="text-lg font-bold text-gray-900 transition-all hover:text-primary-600 2xl:text-xl"
        >
          {article?.title}
        </Link>

        {article?.content && (
          <p className="font-medium text-gray-300 lg:text-lg">
            {truncate(removeHTMLTags(article?.content), 160)}
          </p>
        )}
      </div>
    </div>
  );
}
