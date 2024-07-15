"use client";
import { ThemeProvider as ThemeComponent } from "next-themes";

const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeComponent attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeComponent>
  );
};

export default ThemeProvider;
