import { ReactNode } from "react";
import { cn } from "@app/_lib/utils";

type LabeledIconProps = {
  IconComponent: ReactNode;
  containerClassName?: string;
  textContainerClassName?: string;
  boldTextClassName?: string;
  ghostTextClassName?: string;
} & (
  | { boldText: string; ghostText?: string }
  | { boldText?: string; ghostText: string }
);

function LabeledIcon({
  IconComponent,
  boldText,
  ghostText,
  containerClassName,
  textContainerClassName,
  boldTextClassName,
  ghostTextClassName,
}: LabeledIconProps) {
  return (
    <div className={cn("flex items-center gap-2", containerClassName)}>
      {IconComponent}
      <p
        className={cn(
          "flex items-center gap-1 text-sm",
          textContainerClassName,
        )}
      >
        {boldText ? (
          <span
            className={cn("font-semibold text-gray-900", boldTextClassName)}
          >
            {boldText}
          </span>
        ) : null}
        {ghostText ? (
          <span className={cn("font-medium text-gray-200", ghostTextClassName)}>
            {ghostText}
          </span>
        ) : null}
      </p>
    </div>
  );
}

export default LabeledIcon;
