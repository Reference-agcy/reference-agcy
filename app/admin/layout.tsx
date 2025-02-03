import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";

const DMSans = DM_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Reference | Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={DMSans.className}>
        {children} <ToastContainer />
      </body>
    </html>
  );
}
