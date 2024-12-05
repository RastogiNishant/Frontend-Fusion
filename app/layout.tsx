import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

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
	description: "A portfolio built with Next.js showcasing modern skills.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang='en' data-theme='light'>
				<body
					className={`${montserrat.variable} ${montserratItalic.variable} antialiased bg-gray-100`}
				>
					<div className='flex flex-col min-h-screen'>
						<Header />

						<main className='flex-grow pt-16'>
							<div className='container mx-auto p-4'>
								{children}
							</div>
						</main>

						<footer className='bg-gray-800 text-white'>
							<div className='container mx-auto p-4 text-center'>
								<p>
									&copy; 2024 Nishant R. All rights reserved.
								</p>
							</div>
						</footer>
					</div>
				</body>
			</html>
		</>
	);
}
