import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@app/_lib/utils";

const noDataVariants = cva(
  "flex flex-col items-center justify-center p-4 text-center",
  {
    variants: {
      size: {
        default: "min-h-[200px]",
        sm: "min-h-[100px]",
        lg: "min-h-[300px]",
        full: "size-full",
      },
      variant: {
        default: "text-gray-500",
        error: "text-red-500",
        warning: "text-yellow-500",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  },
);

interface NoDataProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof noDataVariants> {
  message?: string;
}

const NoData = ({
  className,
  size,
  variant,
  message = "No data available",
  ...props
}: NoDataProps) => {
  return (
    <div
      className={cn(noDataVariants({ size, variant }), className)}
      {...props}
    >
      <svg
        className="size-20 opacity-50"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
      <p className="mt-4 text-xl">{message}</p>
    </div>
  );
};

export default NoData;
