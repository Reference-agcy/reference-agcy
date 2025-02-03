"use client";

// Error boundaries must be Client Components
import { useEffect } from "react";
import { deleteCookie } from "cookies-next";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (error.message === "401") {
      console.log("User is not authenticated");
      deleteCookie("token");
    }
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <h2 className="text-48 text-center font-semibold">
        {error.message === "401" ? "User is not authenticated" : error.message}
      </h2>
      <Link href={"/"}>Go To Home</Link>
    </div>
  );
}
