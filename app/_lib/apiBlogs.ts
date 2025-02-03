import { Posts } from "@/@types/articles";

export const getBlogs = async (queryString: string = "", locale: string = "ar") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?${queryString}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Accept-Language": locale ,
      },
      next: {
        revalidate: 0,
      },
    },
  );
  const data = (await res.json()) as Posts;
  if (!res.ok) {
    console.log(data);
    throw new Error("Failed to fetch blogs");
  }
  return data;
};
