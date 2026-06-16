import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "S R S P & Co — Chartered Accountants",
  description:
    "Professional chartered accounting services in Surat. Accuracy, Integrity, and Commitment — S R S P & Co.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen" suppressHydrationWarning>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </body>
    </html>
  );
}
