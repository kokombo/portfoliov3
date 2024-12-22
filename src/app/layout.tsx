import "./globals.css";
import { ThemeProvider } from "@/providers";
import { CallToAction, Footer, NavigationBar } from "@/containers";
import { NeutonRegular, font } from "./font";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samuel Ibrahim Oluwanbowa | Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
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
