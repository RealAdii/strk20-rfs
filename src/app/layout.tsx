import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingContext";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://strk20.dev"),
  title: "STRK20 - Build the privacy layer for on-chain finance",
  description:
    "Open problems Starkware wants solved on STRK20 - the standard for compliant, programmable privacy on Starknet. Find one that fits, talk to us.",
  openGraph: {
    title: "STRK20 - Build the privacy layer for on-chain finance",
    description:
      "Open problems Starkware wants solved on STRK20 - the standard for compliant, programmable privacy on Starknet. Find one that fits, talk to us.",
    type: "website",
    siteName: "STRK20",
  },
  twitter: {
    card: "summary_large_image",
    title: "STRK20 - Build the privacy layer for on-chain finance",
    description:
      "Open problems Starkware wants solved on STRK20 - the standard for compliant, programmable privacy on Starknet. Find one that fits, talk to us.",
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
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
