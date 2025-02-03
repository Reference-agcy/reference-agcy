import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@app/_components/ui/button";
import { Post } from "@/@types/articles";

interface PaginationProps {
  table: Table<Post>;
}

export function Pagination({ table }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4">
      <Button
        variant="outline"
        className="flex size-10 items-center justify-center rounded-[8px] px-0 py-0 hover:bg-primary-500 hover:text-gray-0 2xl:size-10 2xl:px-0"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <span className="sr-only">Go to previous page</span>
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
      </div>

      <Button
        variant="outline"
        className="flex size-10 items-center justify-center rounded-[8px] px-0 py-0 hover:bg-primary-500 hover:text-gray-0 2xl:size-10 2xl:px-0"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <span className="sr-only">Go to next page</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
