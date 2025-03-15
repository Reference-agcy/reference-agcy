"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RiBloggerFill } from "react-icons/ri";
import { TbPasswordUser } from "react-icons/tb";
import CustomSidebar from "@app/_components/Admin/Layout/CustomSidebar";
import Header from "@app/_components/Admin/Layout/Header";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex gap-5">
        <CustomSidebar
          links={links}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className="flex flex-1 flex-col gap-8 py-6 max-md:w-full">
          <Header toggleSidebar={toggleSidebar} />
          <main className="grow">{children}</main>
        </div>
      </div>
    </QueryClientProvider>
  );
}

const links = [
  {
    url: "/admin/blog",
    title: "Blog",
    Icon: RiBloggerFill,
  },
  {
    url: "/admin/change-password",
    title: "Change Password",
    Icon: TbPasswordUser,
  },
];
