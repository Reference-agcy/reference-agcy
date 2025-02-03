"use client";

import styles from "./RichTextRenderer.module.css";
import { FC } from "react";
import createDOMPurify from "dompurify";
import { cn } from "@app/_lib/utils";

interface RichTextProps {
  content: string;
  className?: string;
}

const RichTextRenderer: FC<RichTextProps> = ({ content, className }) => {
  // Create a DOMPurify instance and sanitize the content
  const sanitizedContent =
    typeof window !== "undefined"
      ? createDOMPurify(window).sanitize(content)
      : content;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className={cn(
        styles.richTextContainer,
        "!text-gray-800 [&>*:last-child]:mb-0",
        className,
      )}
    />
  );
};

export default RichTextRenderer;
