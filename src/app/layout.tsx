import "./globals.css";
import { ThemeProvider } from "@/providers";
import { CallToAction, Footer, NavigationBar } from "@/containers";
import { font } from "./font";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samuel Ibrahim Oluwanbowa | Full Stack Developer",
  description:
    "Samuel Ibrahim is a full-stack developer and the technical founder of Shopivol, a platform for small business owners to create websites in minutes. Samuel is a skilled developer who builds web application using React, Node.js, Next.js, Express, TypeScript, JavaScript, Tailwind CSS, ShadCN, etc.",
  keywords: [
    "Samuel Ibrahim",
    "Samuel Oluwanbowa Ibrahim",
    "Full Stack Developer",
    "Software Developer",
    "Nigeria-based Software Developer",
    "Software Engineer",
    "Talented Software Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Skilled Developer",
    "Remote Software Developer",
    "Website Developer for hire",
    "Software Developer for hire",
    "Software Engineer for hire",
    "Website Development",
    "Frontend Developer",
    "Frontend Development",
    "Full-stack Development",
    "Full-stack Developer for hire",
    "Frontend Developer for hire",
  ],
  publisher: "Samuel Ibrahim Oluwanbowa",
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
