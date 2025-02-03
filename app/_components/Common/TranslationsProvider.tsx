"use client";

import initTranslations from "@/app/[locale]/i18n";
import { ReactNode } from "react";
import { createInstance } from "i18next";
import { I18nextProvider } from "react-i18next";

export default function TranslationsProvider({
  children,
  locale,
  resources,
}: {
  children: ReactNode;
  locale: string;
  resources: Record<string, any>;
}) {
  const i18n = createInstance();

  initTranslations(locale, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
