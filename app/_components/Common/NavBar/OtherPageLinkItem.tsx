"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { en } from "@/public/locales/en";

type Props = {
  href: string;
  text: keyof (typeof en)["common"];
};

function OtherPageLinkItem({ href, text }: Props) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const langPrefix =
    segments.length > 1 && i18nConfig.locales.includes(segments[1])
      ? `/${segments[1]}`
      : "";
  const route = langPrefix ? `/${segments.slice(2).join("/")}` : pathname;
  const isActive = route === href;

  return (
    <Link
      href={href}
      className="relative text-2xl font-medium text-gray-900 sm:text-3xl md:text-sm 2xl:text-lg"
    >
      {t("common:" + text)}
      {isActive && (
        <span className="absolute inset-x-0 -bottom-1 flex animate-fade-up items-center justify-center">
          <span className="h-1 w-1.5 rounded-full bg-primary-500 2xl:w-2" />
        </span>
      )}
    </Link>
  );
}

export default OtherPageLinkItem;
