import { env } from "@workspace/env";
import { Inter } from "next/font/google";

import "@workspace/ui/styles/web.css";
import { Header } from "@/components/header/header";
import { Providers } from "@/components/providers";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// const fontMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });

// todo: edit metadata
export const metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "BackOffice",
  description: "Canadian Made",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
