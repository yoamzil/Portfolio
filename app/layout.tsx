import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amzilyouness.me'),
  title: "Youness Amzil | Full Stack Developer",
  description: "Clean, fast portfolio of Youness Amzil - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Morocco"],
  authors: [{ name: "Youness Amzil" }],
  openGraph: {
    title: "Youness Amzil | Full Stack Developer",
    description: "Clean, fast portfolio of Youness Amzil - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://amzilyouness.me",
    siteName: "Youness Amzil Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Youness Amzil Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}