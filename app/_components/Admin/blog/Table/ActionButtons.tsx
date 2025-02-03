import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { CellContext } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import { toast } from "react-toastify";
import { Button } from "@app/_components/ui/button";
import { Post } from "@/@types/articles";
import { adminApi } from "@app/_lib/adminApi";

function ActionButtons({
  row,
  meta,
}: {
  row: CellContext<Post, unknown>;
  meta: { handleEditClick: (slug: string) => void };
}) {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    try {
      setDeleteLoading(true);
      const response = await adminApi<{ message: string }>(
        `/api/posts/${row.row.original.slug}`,
        {
          method: "DELETE",
        },
      );
      if (response) {
        toast.success(
          response.message || `${row.row.original.title} deleted successfully`,
        );
        queryClient.invalidateQueries({ queryKey: ["blog"] });
      }
    } catch (error) {
      console.log(error);
      toast.error(`Error occurred while deleting ${row.row.original.title}`);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        className="!h-10 !w-12 rounded-[8px] !px-0 !py-0 !text-sm font-medium"
        onClick={() => {
          meta?.handleEditClick(row.row.original.slug);
        }}
      >
        Edit
      </Button>
      <Button
        variant="outline"
        className="!size-10 rounded-[8px] border-red-500 !px-0 !py-0 text-red-500 hover:border-red-500 hover:bg-red-500 hover:text-white"
        onClick={handleDelete}
        disabled={deleteLoading}
      >
        <Trash />
      </Button>
    </div>
  );
}

export default ActionButtons;
