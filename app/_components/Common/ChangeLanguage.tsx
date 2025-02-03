"use client";

import {  setCookie } from "cookies-next";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import i18nConfig from "@/i18nConfig";
import UAEFlagIcon from "@/public/images/icons/uea-flag.svg";
import UKFlagIcon from "@/public/images/icons/uk-flag.svg";

const ChangeLAngBtn = () => {
  
  const { locale } = useParams();
  const currentLocale = locale;
  const router = useRouter();
  const currentPathname = usePathname();
  const newLocale = currentLocale === "en" ? "ar" : "en";
  const config = i18nConfig;
  return (
    <button
      onClick={() => {
        if (currentLocale === config.defaultLocale) {
          router.replace("/" + newLocale + currentPathname);
        } else {
          router.replace(
            currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
          );
        }
        setCookie("lang", newLocale);
        router.refresh();
      }}
    >
      {newLocale === "en" ? (
        <Image
          src={UKFlagIcon}
          alt="English"
          className="size-9 md:size-7 2xl:size-9"
        />
      ) : (
        <Image
          src={UAEFlagIcon}
          alt="Arabic"
          className="size-9 md:size-7 2xl:size-9"
        />
      )}
    </button>
  );
};

export default ChangeLAngBtn;
