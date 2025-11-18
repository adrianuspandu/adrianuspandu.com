import React from "react";
import "./globals.css";
import APNavigation from "../components/APNavigation";
import APFooter from "../components/APFooter";
import { lexend, lexendMega } from "../utils/fonts";


export const metadata: Metadata = {
  title: "Adrianus Pandu",
  description:
    "A student at FH Aachen who is passionate about iOS development and Digital Product Design",
  openGraph: {
    title: "Adrianus Pandu",
    description:
      "A student at FH Aachen who is passionate about frontend web development and Digital Product Design",
    url: "https://adrianuspandu.com",
    siteName: "Adrianus Pandu",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={`${lexend.variable} ${lexendMega.variable} antialiased`}>
        <APNavigation />
        <main>{children}</main>
        <APFooter />
      </body>
    </html>
  );
}
