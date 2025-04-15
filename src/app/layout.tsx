import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientBody from "./ClientBody";

// Load local fonts from public/fonts
const apercuPro = localFont({
  variable: "--font-apercu-pro",
  src: [
    {
      path: "../../public/fonts/ApercuProRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ApercuProMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ApercuProBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ApercuProBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "QX Tech | Reliable IT Solutions for Your Business Success",
  description: "QX Tech is a leading IT company specializing in web development, ERP System, digital marketing, SEO.",
  icons: {
    icon: '/images/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${apercuPro.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
