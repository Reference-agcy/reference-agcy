import initTranslations from "@app/[locale]/i18n";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RiFacebookCircleLine, RiYoutubeLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import LINK from "@/public/data/links.json";

export const Footer = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale);

  return (
    <footer className="bg-gray-0">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-4 py-8">
          <div className="space-y-10">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-800 2xl:text-2xl">
              {t("common:footer.navigation")}
            </h3>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-300 2xl:text-lg">
              <Link href="/">{t("common:home-page")}</Link>
              <Link href="/candidate">{t("common:candidate")}</Link>
              <Link href="/about-us">{t("common:about-us")}</Link>
              <Link href="/job-openings">{t("common:jobs")}</Link>
              <Link href="/blog-home">{t("common:blog")}</Link>
              {/* <Link href="/faqs">{t("common:resources")}</Link> */}
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
          {/* <div className="space-y-8 text-gray-300">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-800 2xl:text-2xl">
              {t("common:footer.ksa.title")}
            </h3>
            <p>{t("common:footer.ksa.phone")}</p>
            <div>
              <p>{t("common:footer.ksa.address-1")}</p>
              <p>{t("common:footer.ksa.address-2")}</p>
            </div>
          </div> */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-800 2xl:text-2xl">
              {t("common:footer.follow-us")}
            </h3>
            <div className="flex flex-wrap gap-4 text-xl font-bold text-gray-300 2xl:text-2xl">
              <Link href={LINK.social.facebook}>
                <a target="_blank" rel="noopener noreferrer">
                  <RiFacebookCircleLine size={28} />
                </a>
              </Link>
              <Link href={LINK.social.linkedin}>
                <a target="_blank" rel="noopener noreferrer">
                  <TiSocialLinkedinCircular size={28} />
                </a>
              </Link>
              <Link href={LINK.social.instagram}>
                <a target="_blank" rel="noopener noreferrer">
                  <RiInstagramLine size={28} />
                </a>
              </Link>
              <Link href={LINK.social.tiktok}>
                <a target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={28} />
                </a>
              </Link>
              {/* <Link href={LINK.social.youtube}>
                 <a target="_blank" rel="noopener noreferrer">
                  <RiYoutubeLine size={28} />
                </a>  
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
