import { env } from "@workspace/env";
import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "@workspace/ui/styles/web.css";
import { Header } from "@/components/header/header";
import { Providers } from "@/components/utils/providers";

const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// todo: edit metadata
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/favicon/apple-touch-icon.png", // For Apple Devices (180x180)
    other: [
      { rel: "icon", url: "/favicon/favicon.ico", sizes: "any" }, // default favicon
      { rel: "manifest", url: "/favicon/site.webmanifest" }, // Web App Manifest
    ],
  },
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Cole CPA Website",
  description:
    "Website for Lenard Cole CPA Professional Corporation operating as Cole CPA Group in Saskatoon Saskatchewan Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-mono font-sans antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
