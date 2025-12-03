import type { Metadata } from "next";
import { onest, bounded } from "@/app/components/ui/fonts";
import "./globals.css";
import Header from "@/app/components/shared/Header/Header";
import Footer from "@/app/components/shared/Footer/Footer";
import CookiesBanner from "@/app/components/ui/CookiesBanner";
import { VerticalProgress } from "@/app/components/ui/VerticalProgress";
import ScrollTop from "@/app/components/ui/ScrollToTop";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "problems", label: "Problems" },
  { id: "solutions", label: "Solutions" },
  { id: "advantages", label: "Advantages" },
  { id: "stages", label: "Stages" },
  { id: "price", label: "Price" },
  { id: "form", label: "Form" },
  { id: "faq", label: "Faq" },
  { id: "regalia", label: "Regalia" },
  { id: "news", label: "News" },
  { id: "footer", label: "Footer" },
];

// Мета-данные

export const metadata: Metadata = {
  metadataBase: new URL("https://domain.ru"),
  alternates: { canonical: "/" },

  title: "Название сайта",
  description: "Описание сайта",

  openGraph: {
    title: "Название сайта для соц. сетей",
    description: "Описание сайта для соц. сетей",
    url: "https://domain.ru",
    siteName: "Название сайта для соц. сетей",
    images: [
      {
        url: "/og/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "Превью сайта",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Название сайта для соц. сетей",
    description: "Описание сайта для соц. сетей",
    images: ["/og/og-img.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/icons/favicons/favicon-32x32.svg",
        type: "image/svg",
        sizes: "32x32",
      },

      {
        url: "/icons/favicons/favicon-32x32.svg",
        type: "image/svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/favicons/favicon-32x32.svg",
        type: "image/svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],

    apple: [{ url: "/icons/favicons/favicon-180x180.svg", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${onest.className} ${bounded.variable}`}>
      <body className="leading-1.7 bg-darkBlue flex min-h-screen flex-col overflow-x-hidden font-light text-white antialiased">
        <Header />
        <main className="flex-1">
          {children}
          <div className="container">
            <div className="grid grid-cols-3 grid-rows-2 gap-10"></div>
          </div>
        </main>
        <Footer />
        <CookiesBanner />
        <VerticalProgress sections={sections} />
        <ScrollTop />
      </body>
    </html>
  );
}
