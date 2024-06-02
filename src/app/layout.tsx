"use client";

// import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers";
import { CallToAction, Footer, NavigationBar } from "@/containers";
import { NeutonRegular, NeutonBold } from "./font";

// export const metadata: Metadata = {
//   title:
//     "Samuel Ibrahim: Full-Stack Developer, React, Node.js, Next.js, Express.js, TypeScript, Tailwind CSS, React Native",
//   description:
//     "A seasoned full stack web developer proficient in React, Next.js, Node.js, Express.js, MERN/PERN Stack",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
