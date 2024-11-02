import type {Metadata} from "next";
import {Merriweather} from "next/font/google";
import "./globals.css";
import {PropsWithChildren} from "react";

const merriweather = Merriweather({
	weight: ["400", "300", "700"],
	display: "swap",
	fallback: ["Times New Roman", "serif"],
	subsets: ["latin-ext"],
});

export const metadata: Metadata = {
	title: "Petice o začlenění práva na potrat i jinou tělesnou svobodu do Listiny základních práv a svobod",
	description:
		"Základní, lidská práva. Ach ano. A co má každý člověk? Tělo! Jak to že tedy mezi lidskými právy zcela chybí ochrana tělesné svobody? Především se ale petice zasazuje o začlenění potratu mezi lidská práva, kdy Listina jen vágně deklaruje: „Lidský život je hoden ochrany i před narozením“.",
};

export default function RootLayout({children}: PropsWithChildren) {
	return (
		<html lang="cs">
			<body className={merriweather.className}>{children}</body>
		</html>
	);
}
