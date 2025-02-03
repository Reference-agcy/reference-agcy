import { useInfiniteQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { Posts } from "@/@types/articles";
import { getBlogs } from "@app/_lib/apiBlogs";

export const useGetPosts = () => {
  const searchParams = useSearchParams();
  const perPage = 9;

  // Extract search parameters
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const isPopular = searchParams.get("isPopular") || "";

  const {
    data,
    isPending,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<Posts>({
    queryKey: ["posts", search, category, isPopular],
    queryFn: async ({ pageParam }) => {
      const currentPage = (pageParam as number) ?? 1;
      const queryParams = new URLSearchParams();

      // Add required parameters
      queryParams.append("page", currentPage.toString());
      queryParams.append("per_page", perPage.toString());

      // Add optional search parameters
      if (search) queryParams.append("query", search);
      if (category) queryParams.append("category", category);
      if (isPopular) queryParams.append("isPopular", isPopular);

      console.log("Final Query:", queryParams.toString());
      return getBlogs(queryParams.toString(), getCookie("NEXT_LOCALE"));
    },
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.pagination.pages;
      const totalPages = lastPage.pagination.totalPages;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
    gcTime: 60 * 1000, // 1 minute cache time
  });

  return {
    data,
    isPending,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
};
