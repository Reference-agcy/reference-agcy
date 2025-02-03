import { useEffect } from "react";

interface UseFetchNextPageProps {
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

export default function useFetchNextPage({
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: UseFetchNextPageProps) {
  useEffect(() => {
    // infinite scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (
        scrollTop + windowHeight >= documentHeight - 300 &&
        !isFetchingNextPage &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    };

    // Add the scroll listener to window
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the scroll listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);
}
