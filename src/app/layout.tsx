import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingContext";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://strk20.dev"),
  title: "STRK20 — Build the privacy layer for on-chain finance",
  description:
    "Open problems Starkware wants solved on STRK20 — the standard for compliant, programmable privacy on Starknet. Find one that fits, talk to us.",
  openGraph: {
    title: "STRK20 — Build the privacy layer for on-chain finance",
    description:
      "Open problems Starkware wants solved on STRK20 — the standard for compliant, programmable privacy on Starknet. Find one that fits, talk to us.",
    type: "website",
    siteName: "STRK20",
  },
  twitter: {
    card: "summary_large_image",
    title: "STRK20 — Build the privacy layer for on-chain finance",
    description:
      "Open problems Starkware wants solved on STRK20 — the standard for compliant, programmable privacy on Starknet. Find one that fits, talk to us.",
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
      className={`${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
