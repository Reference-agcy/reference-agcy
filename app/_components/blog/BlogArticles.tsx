"use client";

import { useSearchParams } from "next/navigation";
import PostsList from "./PostsList";

export default function BlogArticles({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  return search ? (
    <div className="container mb-[2.625rem] min-h-[40dvh]">
      <PostsList />
    </div>
  ) : (
    children
  );
}
