import { ColumnDef } from "@tanstack/react-table";
import ActionButtons from "./ActionButtons";
import { Post } from "@/@types/articles";
import { removeHTMLTags } from "@app/_lib/removeHTMLTags";

export const BlogColumn: ColumnDef<Post>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Slug",
    accessorKey: "slug",
  },
  {
    header: "Content",
    accessorKey: "content",
    cell: ({ getValue }) => (
      <div className="max-w-[300px] text-center truncate overflow-hidden mx-auto">
        {removeHTMLTags(String(getValue()))}
      </div>
    ),
  },
  {
    header: "Actions",
    cell: (row) => (
      <ActionButtons
        row={row}
        meta={
          row.table.options.meta as { handleEditClick: (slug: string) => void }
        }
      />
    ),
  },
];
