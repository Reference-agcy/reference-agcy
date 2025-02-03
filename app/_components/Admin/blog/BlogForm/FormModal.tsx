"use client";

import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@app/_components/ui/dialog";
import BlogForm from ".";

export default function FromModal({
  isEdit,
  slug,
  open,
  onOpenChange,
}: {
  isEdit: boolean;
  slug?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-10">
        <DialogTitle className="sr-only">Blog Form</DialogTitle>
        <DialogHeader>
          <h2 className="text-2xl font-semibold">
            {isEdit ? "Edit Blog" : "Create Blog"}
          </h2>
        </DialogHeader>

        <BlogForm
          isEdit={isEdit}
          slug={slug}
          onCloseModal={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
