import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "NLP PORTFOLIO",
  description:
    "An academic portfolio documenting projects, research explorations, publications and practical activities in Natural Language Processing and Computational Linguistics.",
  openGraph: {
    title: "NLP PORTFOLIO — Natural Language Processing and Computational Linguistics (CSI4001)",
    description:
      "An academic portfolio documenting projects, research explorations, publications and practical activities in Natural Language Processing and Computational Linguistics by Abijit I B (23MIC0013) at VIT Vellore.",
    type: "website",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1080,
        height: 1350,
        alt: "Abijit I B — NLP Portfolio Academic Research Journal",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased selection:bg-gold-400/30 selection:text-ivory-50">
        {children}
      </body>
    </html>
  );
}
