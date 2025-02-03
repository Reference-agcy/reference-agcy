import { Post } from "@/@types/post";

export const getPost = async (id: string = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: {
        revalidate: 0,
      },
    },
  );
  const data = (await res.json()) as Post;
  if (!res.ok) {
    console.log(res);
    console.log(data);
    throw new Error("Failed to fetch blogs");
  }
  return data;
};
