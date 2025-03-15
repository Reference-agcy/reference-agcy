import initTranslations from "@app/[locale]/i18n";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import RecentArticles from "@app/_components/Common/RecentArticles";
import RichTextRenderer from "@app/_components/Common/RichTextRenderer";
import ScreenHeader from "@app/_components/Common/ScreenHeader";
import Spinner from "@app/_components/spinner";
import { getPost } from "@app/_lib/apiPost";
import { removeHTMLTags } from "@app/_lib/removeHTMLTags";
import { truncate } from "@app/_lib/truncate";

// Configure dynamic params and revalidation
// export const dynamicParams = true; // Allow rendering of pages not generated at build time
export const revalidate = 3600; // Revalidate every hour

type SinglePostProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export default async function SinglePost({ params }: SinglePostProps) {
  const { slug, locale } = await params;
  const post = await getPost(slug);

  // Handle cases where post is not found
  if (!post) {
    notFound();
  }
  const { t } = await initTranslations(post.lang || locale);

  return (
    <article dir={post.lang === "ar" ? "rtl" : "ltr"}>
      <ScreenHeader
        title={post.title}
        breadcrumbs={[
          {
            title: t("common:home-page"),
            href: "/",
          },
          {
            title: t("common:blog"),
            href: "/blog-home",
          },
          {
            title: post.slug,
            // href: `/blog/${post.slug}`,
          },
        ]}
      />
      <div className="container mb-[2.625rem] flex min-h-[40dvh] flex-col gap-14">
        <RichTextRenderer content={post.content} />

        <Suspense
          fallback={
            <div className="col-span-full flex justify-center px-8 py-1">
              <Spinner />
            </div>
          }
        >
          <RecentArticles
            t={t}
            viewAllLink={{
              href: "/blog",
              title: t("common:actions.view-all"),
            }}
          />
        </Suspense>
      </div>
    </article>
  );
}

// Optional: Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found",
    };
  }

  return {
    title: post.title,
    description: truncate(removeHTMLTags(post.content), 160),
    openGraph: {
      title: post.title,
      images: [post.thumbnail],
    },
  };
}
