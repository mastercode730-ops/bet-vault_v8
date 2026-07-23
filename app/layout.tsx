import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvault.in'),
  title: "Bet Vault v8 | Premium Cyber Betting & Instant Exchange ID Platform",
  description: "Get verified online sports betting IDs for Cricket IPL, Football, and Tennis within 3 minutes. Instant UPI withdrawals, 24/7 human support, and live exchange odds.",
  keywords: "Bet Vault v8, online betting ID, cricket betting ID, IPL odds, Diamond exchange ID, SkyExchange ID, instant withdrawal betting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-[#080B11] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-amber-500 selection:text-slate-950" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
