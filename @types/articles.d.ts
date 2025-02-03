export interface article {
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface Post {
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
}
export interface Posts {
  posts: Post[];
  pagination: {
    total: number;
    pages: number;
    limit: number;
    totalPages: number;
  };
}
