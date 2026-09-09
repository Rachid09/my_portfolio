import type { Metadata } from "next";
import "./globals.css";

import { i18n } from "../../../i18n-config";
import Footer from "./components/footer";
import Header from "./components/header";
import { Toaster } from "react-hot-toast";

import ActiveSectionContextProvider from "./context/active-section-context";

import ThemeSwitch from "./components/theme-switch";
import ThemeContextProvider from "./context/theme-context";

export const metadata: Metadata = {
  title: "Rachid Ahsoune | Full-Stack Engineer",
  description:
    "Full-Stack Engineer specializing in Java (Spring ), PHP (Laravel), Vue.js (TypeScript) and AI systems. Based in Casablanca, Morocco.",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
  readonly params: { lang: string };
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
