import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./config/site";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${archivoBlack.variable} ${space.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
