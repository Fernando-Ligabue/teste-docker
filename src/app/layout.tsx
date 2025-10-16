import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import FloatingButton from "@/components/layout/FloatingButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900'],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CPME - Caixa de Previdência do Ministério da Educação",
  description: "CPME - Caixa de Previdência do Ministério da Educação",
  icons: {
    icon: "/CPME/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingButton />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}