import initTranslations from "@app/[locale]/i18n";
import Link from "next/link";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandBehance } from "react-icons/tb";

export const Footer = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale);

  return (
    <footer className="bg-gray-0">
      <div className="container">
        <div className="grid grid-cols-[25rem_1fr_1fr_1fr] gap-4 py-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="space-y-10">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-800 2xl:text-2xl">
              {t("common:footer.navigation")}
            </h3>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-300 2xl:text-lg">
              <Link href="/">{t("common:home-page")}</Link>
              <Link href="/candidate">{t("common:candidate")}</Link>
              <Link href="/blog-home">{t("common:blog")}</Link>
              <Link href="/about-us">{t("common:about-us")}</Link>
              <Link href="/faqs">{t("common:resources")}</Link>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-800 2xl:text-2xl">
              {t("common:footer.follow-us")}
            </h3>
            <div className="flex flex-wrap gap-6 text-xl font-bold text-gray-300 2xl:text-2xl">
              <Link href="/">
                <RiFacebookCircleLine />
              </Link>
              <Link href="/">
                <FiTwitter />
              </Link>
              <Link href="/">
                <FaInstagram />
              </Link>
              <Link href="/">
                <FaDribbble />
              </Link>
              <Link href="/" className="">
                <TbBrandBehance className="" />
              </Link>
            </div>
          </div>
          <div className="space-y-8 text-gray-300">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-800 2xl:text-2xl">
              {t("common:footer.egypt.title")}
            </h3>
            <p>{t("common:footer.egypt.phone")}</p>
            <div>
              <p>{t("common:footer.egypt.address-1")}</p>
              <p>{t("common:footer.egypt.address-2")}</p>
            </div>
          </div>
          <div className="space-y-8 text-gray-300">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-800 2xl:text-2xl">
              {t("common:footer.uae.title")}
            </h3>
            <p>{t("common:footer.uae.phone")}</p>
            <div>
              <p>{t("common:footer.uae.address-1")}</p>
              <p>{t("common:footer.uae.address-2")}</p>
            </div>
          </div>
          <div className="space-y-8 text-gray-300">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-800 2xl:text-2xl">
              {t("common:footer.ksa.title")}
            </h3>
            <p>{t("common:footer.ksa.phone")}</p>
            <div>
              <p>{t("common:footer.ksa.address-1")}</p>
              <p>{t("common:footer.ksa.address-2")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
