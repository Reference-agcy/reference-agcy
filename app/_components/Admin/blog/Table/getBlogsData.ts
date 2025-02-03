import { toast } from "react-toastify";
import { Post } from "@/@types/articles";
import { adminApi } from "@app/_lib/adminApi";

type BlogResponse = { posts: Post[]; pagination: Pagination };

export const getBlogsData = async ({
  pagination,
  setTotalDataCount,
}: {
  pagination: { pageIndex: number; pageSize: number };
  setTotalDataCount: (count: number) => void;
}) => {
  const queryParams = {
    page: (pagination.pageIndex + 1).toString(),
    limit: pagination.pageSize.toString(),
    all: "true",
  };

  const fetchUrl = `api/posts?${new URLSearchParams(queryParams)}`;

  try {
    const response = await adminApi<BlogResponse>(fetchUrl);

    const data = response;
    setTotalDataCount(data.pagination.total);
    return data.posts;
  } catch (error) {
    console.log(error);
    toast.error("Error occurred while fetching data!");
    setTotalDataCount(0);
    return [];
  }
};
