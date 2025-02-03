"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all-jobs";
  const categories = [
    {
      name: "All Jobs",
      slug: "all-jobs",
    },
    {
      name: "Digital Products",
      slug: "digital-products",
    },
    {
      name: "Design",
      slug: "design",
    },
    {
      name: "Strategy",
      slug: "strategy",
    },
  ];
  return (
    <aside>
      <ul data-aos="fade-right">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className={` ${category.slug === currentCategory ? "active" : ""} w-full rounded-2xl p-6 text-start font-bold text-gray-900 transition-all 2xl:text-lg [&.active]:bg-gray-0`}
              onClick={() => {
                const params = new URLSearchParams();
                params.set("category", category.slug);
                router.replace(`${pathname}?${params.toString()}`);
              }}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Categories;
