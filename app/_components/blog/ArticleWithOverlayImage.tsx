import { i18n } from "i18next";
import Image from "next/image";
import { ClassNameValue } from "tailwind-merge";
import LearnMoreOverlay from "../Common/LearnMoreOverlay";
import { Post } from "@/@types/articles";
import { removeHTMLTags } from "@app/_lib/removeHTMLTags";
import { truncate } from "@app/_lib/truncate";
import { cn } from "@app/_lib/utils";

interface Props {
  article: Post;
  className?: ClassNameValue;
  t: i18n["t"];
  dataAos?: string;
}

export default function ArticleWithOverlayImage({
  article,
  t,
  className = "",
  dataAos,
}: Props) {
  return (
    <div
      data-aos={dataAos}
      className={cn(
        "group relative flex h-[588px] w-1/2 max-w-[522px] px-6 pb-[60px]",
        className,
      )}
    >
      <LearnMoreOverlay t={t} link={`/blog/${article?.slug}`} />
      <div className="absolute inset-0 z-[-1] rounded-2xl bg-gradient-to-t from-[#252A3F] to-transparent" />

      <Image
        src={article?.thumbnail}
        alt={article?.title}
        width={522}
        height={588}
        className="absolute inset-0 z-[-2] h-full w-full rounded-2xl object-cover"
      />

      <div className="flex flex-col gap-3 self-end">
        <h4 className="text-xl font-bold leading-9 text-white lg:text-3xl">
          {article?.title}
        </h4>
        {article?.content && (
          <p className="font-medium text-white/70 lg:text-lg">
            {truncate(removeHTMLTags(article?.content), 200)}
          </p>
        )}
      </div>
    </div>
  );
}
