import { i18n } from "i18next";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  t: i18n["t"];
  link: string;
}

export default function LearnMoreOverlay({ t, link }: Props) {
  return (
    <div className="absolute inset-0 z-[10] flex scale-0 items-center justify-center rounded-2xl bg-black/50 transition-all duration-300 group-hover:scale-100">
      <Link href={link}>
        <Button>{t("common:actions.learn-more")}</Button>
      </Link>
    </div>
  );
}
