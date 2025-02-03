import { cn } from "@app/_lib/utils";

type FlagIconProps = {
  className?: string;
};

function FlagIcon({ className }: FlagIconProps) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-none stroke-gray-200", className)}
    >
      <path
        d="M5.33789 1.5V16.5"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.71289 3L11.7879 5.625C14.2629 6.675 14.2629 8.475 11.9379 9.675L5.71289 12.75"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FlagIcon;
