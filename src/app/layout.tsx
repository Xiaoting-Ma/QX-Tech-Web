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
  title: "TechBI",
  description: "Potenciando el valor de tus datos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${apercuPro.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
