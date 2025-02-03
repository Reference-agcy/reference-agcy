"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Plus, SquareChevronRight } from "lucide-react";
import { toast } from "react-toastify";
import { Button } from "@app/_components/ui/button";
import FormModal from "../blog/BlogForm/FormModal";
import { adminApi } from "@app/_lib/adminApi";

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await adminApi<{
          user: { name: string };
        }>("api/me");

        return response.user.name;
      } catch (error) {
        console.error(error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Error occurred while fetching admin name!";
        toast.error(errorMessage);
      }
    },
  });

  return (
    <header className="flex flex-wrap items-center justify-between gap-5 px-5">
      <div className="flex items-center gap-3">
        <button className="lg:hidden" onClick={toggleSidebar}>
       <SquareChevronRight size={30} />
        </button>

        <h1 className="text-3xl font-bold">
          {isLoading ? "..." : data || "Admin"}
        </h1>
      </div>

      <Button
        className="!h-10 !w-auto rounded-[8px] !py-0 !text-sm font-bold"
        onClick={() => setIsOpenModal(true)}
      >
        Add Blog <Plus />
      </Button>

      <FormModal
        isEdit={false}
        open={isOpenModal}
        onOpenChange={setIsOpenModal}
      />
    </header>
  );
}
