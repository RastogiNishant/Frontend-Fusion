import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
	src: "./fonts/Montserrat.ttf",
	variable: "--font-montserrat",
	weight: "100 900",
});

const montserratItalic = localFont({
	src: "./fonts/Montserrat-Italic.ttf",
	variable: "--font-montserrat-italic",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Nishant's Portfolio",
	description:
		"A portfolio built with Next.js showcasing modern frontend skills.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang='en'>
				<body
					className={`${montserrat.variable} ${montserratItalic.variable} antialiased bg-gray-100`}
				>
					{children}
				</body>
			</html>
		</>
	);
}
