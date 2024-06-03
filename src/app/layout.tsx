"use client";

import "./globals.css";
import { ThemeProvider } from "@/providers";
import { CallToAction, Footer } from "@/containers";
import { NeutonRegular, NeutonBold } from "./font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NeutonRegular.className}>
        <ThemeProvider>
          {children}
          <CallToAction />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
