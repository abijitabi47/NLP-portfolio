
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NLP PORTFOLIO",
  description:
    "An academic portfolio documenting projects, research explorations, publications and practical activities in Natural Language Processing and Computational Linguistics.",
  openGraph: {
    title:
      "NLP PORTFOLIO — Natural Language Processing and Computational Linguistics (CSI4001)",
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
    <html lang="en">
      <body className="font-sans antialiased selection:bg-gold-400/30 selection:text-ivory-50">
        {children}
      </body>
    </html>
  );
}
