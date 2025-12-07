import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skillverse - Revolutionizing India's Education",
  description: "We are building a nationwide movement to unlock human potential in every corner of India through hyper-local Skill Labs and the 4L Transformation System.",
  keywords: "education, skill development, India, Skill Labs, EduWarrior, transformation, learning",
  authors: [{ name: "Skillverse" }],
  openGraph: {
    title: "Skillverse - Revolutionizing India's Education",
    description: "Building a nationwide movement to unlock human potential through Skill Labs.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
