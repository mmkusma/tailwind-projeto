import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
	title: "Tailwind CSS Labs",
	description: "Project used to showcase Tailwind CSS features.",
};

const font = Montserrat({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${font.className} antialiased`}>{children}</body>
		</html>
	);
}
