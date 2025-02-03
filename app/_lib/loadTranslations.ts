import { namespaces } from "@/i18nConfig";
import fs from "fs";
import path from "path";

export function loadTranslations(locale: string) {
  const translations: Record<string, any> = {};
  namespaces.forEach((namespace) => {
    const filePath = path.resolve(
      process.cwd(),
      `public/locales/${locale}/${namespace}.json`,
    );
    if (fs.existsSync(filePath)) {
      translations[namespace] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
  });
  return {
    [locale]: { ...translations },
  };
}
