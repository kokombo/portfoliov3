import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Samuel Ibrahim: Full-Stack Developer, React, Node.js, Next.js, Express.js, TypeScript, Tailwind CSS, React Native",
  description:
    "A seasoned full stack web developer proficient in React, Next.js, Node.js, Express.js, MERN/PERN Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
