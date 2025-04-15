import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientBody from "./ClientBody";

const techFonts = localFont({
  variable: "--font-tech",
  src: [
    {
      path: "../../public/fonts/Inter-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-ExtraBold.otf",
      weight: "800",
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
    <html lang="en" className={`${techFonts.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
