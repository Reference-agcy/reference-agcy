import React from "react";
import { cn } from "@app/_lib/utils";

type DollarCircleIconProps = {
  className?: string;
};

function DollarCircleIcon({ className }: DollarCircleIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-none stroke-gray-200", className)}
    >
      <path
        d="M7.22656 11.9416C7.22656 13.0166 8.05156 13.8832 9.07656 13.8832H11.1682C12.0599 13.8832 12.7849 13.1249 12.7849 12.1916C12.7849 11.1749 12.3432 10.8166 11.6849 10.5832L8.32656 9.41658C7.66823 9.18324 7.22656 8.82491 7.22656 7.80824C7.22656 6.87491 7.95156 6.11658 8.84323 6.11658H10.9349C11.9599 6.11658 12.7849 6.98324 12.7849 8.05824"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5V15"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DollarCircleIcon;
