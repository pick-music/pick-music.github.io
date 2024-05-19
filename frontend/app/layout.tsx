import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/providers/ThemeProvider";
import {FontProvider} from "@/providers/FontProvider";

export const metadata: Metadata = {
  title: "Welcome to Pick Music!",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-pt-[var(--header-height)]"
    >
    <FontProvider
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </FontProvider>
    </html>
  );
}
