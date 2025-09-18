"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FaPlay } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@app/_components/ui/dialog";

interface Props {
  videoUrl?: string;
}
const VideoDialog = ({
  videoUrl = "https://www.youtube.com/watch?v=7EsDTWjtVmU",
}: Props) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="absolute left-1/2 top-1/2 z-10 flex aspect-square w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg text-gray-300 after:absolute after:z-[-1] after:h-full after:w-full after:animate-ping after:rounded-full after:bg-primary-500"
            aria-label={t("case-study-action.watch-video")}
          >
            <FaPlay />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("case-study-action.watch-video")}</DialogTitle>
          </DialogHeader>
          <div className="overflow-hidden rounded-xl">
            <iframe
              className="w-full"
              height="450"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoDialog;
