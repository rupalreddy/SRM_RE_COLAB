import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "SRM RE-Colab",
  description: "Research Collaboration Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className="transition-colors duration-300">

        <ThemeProvider>

          {children}

        </ThemeProvider>

      </body>

    </html>
  );
}