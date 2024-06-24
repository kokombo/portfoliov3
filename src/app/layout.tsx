"use client";

import "./globals.css";
import { ThemeProvider } from "@/providers";
import { CallToAction, Footer, NavigationBar } from "@/containers";
import { NeutonRegular } from "./font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Samuel Ibrahim Oluwanbowa | Full Stack Developer</title>

        <meta charSet="utf-8" />

        <link
          rel="icon"
          href="/assets/icons/samuel.png"
          type="image/png"
          sizes="any"
        />
      </head>

      <body className={NeutonRegular.className}>
        <ThemeProvider>
          <NavigationBar />
          {children}
          <CallToAction />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
