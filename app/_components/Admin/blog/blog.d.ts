type Pagination = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

interface FormDataType {
  title: string;
  thumbnail: File | null;
  content: string;
  category: string;
  isPopular: boolean;
  lang: string;
}

interface FormErrors {
  title?: string;
  thumbnail?: string;
  content?: string;
  category?: string;
  lang?: string;
  [key: string]: string | undefined;
}
