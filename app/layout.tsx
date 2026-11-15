import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./config/site";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={spaceGrotesk.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
