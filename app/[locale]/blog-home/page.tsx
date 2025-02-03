import initTranslations from "../i18n";
import RecentArticles from "@app/_components/Common/RecentArticles";
import BlogArticles from "@app/_components/blog/BlogArticles";
import GeneralArticles from "@app/_components/blog/GeneralArticles";
import Header from "@app/_components/blog/Header";
import HorizontalRecentlyArticles from "@app/_components/blog/HorizontalRecentlyArticles";
import PopularArticles from "@app/_components/blog/PopularArticles";

export default async function Blog({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await initTranslations(locale);

  return (
    <main className="animate-fade-left">
      <Header />

      <BlogArticles>
        <div className="tracking container space-y-6 pb-6 max-md:space-y-12">
          <GeneralArticles t={t} />
          <PopularArticles t={t} />
          <RecentArticles
            t={t}
            className="[&_a:not(h2+a)]:text-2xl [&_h2]:text-3xl"
            viewAllLink={{
              href: "/blog",
              title: t("common:actions.view-all"),
            }}
          />
          <HorizontalRecentlyArticles t={t} />
        </div>
      </BlogArticles>
    </main>
  );
}
