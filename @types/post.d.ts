export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  isPopular: boolean;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  lang: "ar" | "en";
  category: {
    id: string;
    name: string;
    createdAt: string;
  };
}
