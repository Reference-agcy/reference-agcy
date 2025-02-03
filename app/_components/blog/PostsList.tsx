"use client";

import { useTranslation } from "react-i18next";
import ArticleCard from "@app/_components/Common/ArticleCard";
import Spinner from "@app/_components/spinner";
import NoData from "../Common/NoData";
import { useGetPosts } from "./useGetPosts";
import useFetchNextPageProps from "@app/_hooks/useFetchNextPage";

const PostsList = () => {
  const { data, isFetchingNextPage, isPending, hasNextPage, fetchNextPage } =
    useGetPosts();
  useFetchNextPageProps({
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  });
  const { t } = useTranslation();

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  return (
    <section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isPending ? (
          <div className="col-span-full flex items-center justify-center px-8 py-6">
            <Spinner />
          </div>
        ) : posts?.length > 0 ? (
          posts?.map((post, i) => (
            <ArticleCard
              key={`${post.slug}-post`}
              index={i}
              article={post}
              t={t}
            />
          ))
        ) : (
          <NoData
            message={t("blog:no-posts-found")}
            className="sm:col-span-2 lg:col-span-3"
          />
        )}
        {isFetchingNextPage && (
          <div className="col-span-full flex justify-center px-8 py-1">
            <Spinner />
          </div>
        )}
      </div>
    </section>
  );
};

export default PostsList;
