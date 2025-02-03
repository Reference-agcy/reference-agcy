import { BsThreeDots } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { Button } from "@app/_components/ui/button";
import { cn } from "@app/_lib/utils";

type ActionsButtonsProps = {
  onBookmarkClick?: () => void;
  onMoreOptionsClick?: () => void;
  bookmarkClassName?: string;
  moreOptionsClassName?: string;
};

function ActionsButtons({
  onBookmarkClick,
  onMoreOptionsClick,
  bookmarkClassName,
  moreOptionsClassName,
}: ActionsButtonsProps) {
  return (
    <div className="flex justify-end gap-4">
      <Button
        variant="icon"
        size="icon"
        title="Bookmark"
        className={cn("", bookmarkClassName)}
        onClick={onBookmarkClick}
      >
        <LuBookmark className="size-[1.375rem] stroke-gray-200 group-first-of-type:stroke-gray-0" />
      </Button>
      <Button
        variant="icon"
        size="icon"
        title="More options"
        className={cn("", moreOptionsClassName)}
        onClick={onMoreOptionsClick}
      >
        <BsThreeDots className="size-[1.375rem] fill-gray-200 group-first-of-type:fill-gray-0" />
      </Button>
    </div>
  );
}

export default ActionsButtons;
