import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Meet Black",
  description: "a landing page",
};

import { ThemeProvider } from "./components/theme-provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="cwkwy cdmud cci6q c8d3u ca3pf cu0vm c6zr7">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
