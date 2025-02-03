import { namespaces } from "@/i18nConfig";
import { en } from "@/public/locales/en";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: (typeof namespaces)[0];
    resources: typeof en;
  }
}
