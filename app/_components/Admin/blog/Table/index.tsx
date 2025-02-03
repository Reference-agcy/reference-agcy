"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Spinner from "@app/_components/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@app/_components/ui/table";
import FormModal from "../BlogForm/FormModal";
import { BlogColumn } from "./Columns";
import { Pagination } from "./Pagination";
import { getBlogsData } from "./getBlogsData";

function BlogTable() {
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [modalSlug, setModalSlug] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: [
      "blog",
      {
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
      },
    ],
    queryFn: () =>
      getBlogsData({
        pagination,
        setTotalDataCount,
      }),
  });

  const table = useReactTable({
    data: data || [],
    columns: BlogColumn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    onPaginationChange: setPagination,
    rowCount: totalDataCount,
    state: {
      pagination,
    },
    meta: {
      handleEditClick: (slug: string) => {
        setModalSlug(slug);
      },
    },
  });

  return (
    <div>
      <div className="max-h-[90vh] max-w-[95%] overflow-auto w-full mx-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-border hover:bg-transparent"
              >
                {headerGroup.headers.map((header, i) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`${i !== 0 ? "text-center" : ""} select-none`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={BlogColumn.length}
                  className="h-24 text-center"
                >
                  <Spinner className="mx-auto" />
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, i) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`${i % 2 === 0 ? "bg-gray-900/5" : "bg-white"} hover:bg-gray-900/5`}
                >
                  {row.getVisibleCells().map((cell, i) => (
                    <TableCell
                      key={cell.id}
                      className={i !== 0 ? "text-center" : ""}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={BlogColumn.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination table={table} />

      <FormModal
        isEdit
        open={!!modalSlug}
        onOpenChange={() => setModalSlug("")}
        slug={modalSlug}
      />
    </div>
  );
}

export default BlogTable;
