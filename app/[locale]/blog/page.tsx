import AllBlogHeader from "@app/_components/blog/AllBlogHeader";
import PostsList from "@app/_components/blog/PostsList";

export default async function Blog() {
  return (
    <div>
      <AllBlogHeader />
      <div className="container mb-[2.625rem] min-h-[40dvh]">
        <PostsList />
      </div>
    </div>
  );
}
