import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	metadataBase: new URL('https://amzilyouness.me'),
	title: "Youness Amzil | Junior Full Stack Developer",
	description: "Portfolio website of Youness Amzil, a Full Stack Developer based in Morocco. Specializing in React, Next.js, TypeScript, and modern web technologies.",
	keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Morocco"],
	authors: [{ name: "Youness Amzil" }],
	openGraph: {
		title: "Youness Amzil | Full Stack Developer",
		description: "Portfolio website of Youness Amzil, a Full Stack Developer based in Morocco. Specializing in React, Next.js, TypeScript, and modern web technologies.",
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
	twitter: {
		card: "summary_large_image",
		title: "Youness Amzil | Full Stack Developer",
		description: "Portfolio website of Youness Amzil, a Full Stack Developer based in Morocco.",
		images: ["/og-image.png"],
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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
