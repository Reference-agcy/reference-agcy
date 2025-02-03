import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { JobsResponse } from "@/@types/jobs";
import { getJobs } from "@app/_lib/apiJobs";

export const useGetJobs = () => {
  const searchParams = useSearchParams();
  const perPage = 9;

  // Extract search parameters
  const jobType = searchParams.get("jobType") || "";
  const location = searchParams.get("location") || "";
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  // Build criteria with proper formatting
  const criteriaParts: string[] = [];

  if (location) criteriaParts.push(`((Location:equals:${location}))`);
  if (category) criteriaParts.push(`((Category:equals:${category}))`);
  if (search) criteriaParts.push(`((Job_Title:contains:${search}))`);
  if (jobType) criteriaParts.push(`((Job_Type:equals:${jobType}))`);

  const criteria = criteriaParts.join(" and ");

  const {
    data,
    isPending,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<JobsResponse>({
    queryKey: ["jobs", jobType, location, search, category],
    queryFn: async ({ pageParam }) => {
      const currentPage = (pageParam as number) ?? 1;
      const queryParams = new URLSearchParams();

      // Add required parameters
      queryParams.append("page", currentPage.toString());
      queryParams.append("per_page", perPage.toString());

      // Add URL-encoded criteria
      if (criteria) {
        queryParams.append("criteria", encodeURIComponent(criteria));
      }

      console.log("Final Query:", queryParams.toString());
      return getJobs(queryParams.toString());
    },
    getNextPageParam: (response) =>
      response.info.more_records ? response.info.page + 1 : undefined,
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
