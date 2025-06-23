import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Noto_Sans_Arabic } from "next/font/google";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";
import AosProvider from "@app/_components/AosProvider";
import Footer from "@app/_components/Common/Footer";
import NavBar from "@app/_components/Common/NavBar";
import TranslationsProvider from "@app/_components/Common/TranslationsProvider";
import TanstackQueryProvider from "@app/_components/TanstackQueryProvider";
import i18nConfig from "@/i18nConfig";
import { loadTranslations } from "@app/_lib/loadTranslations";

const DMSans = DM_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: ["300", "400", "600", "700", "800"],
});

const NotoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Reference",
  description: "",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const translations = loadTranslations(locale);
  const mode = cookies().get("mode")?.value || "light";
  const fontClass =
    locale === "ar" ? NotoSansArabic.className : DMSans.className;

  return (
    <html
      lang={locale}
      className={`${locale} ${mode}`}
      dir={`${locale === "ar" ? "rtl" : "ltr"}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
        {/* Google Analytics Script Loader */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1J69PLXP20"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1J69PLXP20');
          `}
        </Script>
      </head>
      <TranslationsProvider locale={locale} resources={translations}>
        <body className={`${fontClass} relative`}>
          <TanstackQueryProvider>
            <AosProvider>
              <NavBar />
              {children}
              <Footer locale={locale} />
              <ToastContainer />
              <div id="portal"></div>
            </AosProvider>
          </TanstackQueryProvider>
        </body>
      </TranslationsProvider>
    </html>
  );
}
