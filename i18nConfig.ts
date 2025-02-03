import { en } from "@/public/locales/en";
import { defaultLocale } from "./constants";

const i18nConfig = {
    locales: ["en", "ar"],
    defaultLocale: defaultLocale,
};

export const namespaces = Object.keys(en);

export default i18nConfig;
