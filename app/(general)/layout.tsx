import "@/globals.css";
import Head from "@/head";
import { Metadata } from "next";
import { MainNav } from "@/components/main-nav";
import AuthNav from "@/components/auth-nav";
import { checkPWA } from '@/components/pwa-checker';
import Footer from "@/components/site-footer";


export const metadata: Metadata = {
  title: "Crypto Pro",
  description: "Listes des meilleures cryptomonnaies sur lesquelles investir, formation de trading de cryptomonnaies.",
};


export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <body className="min-h-screen w-screen overflow-x-hidden font-sans antialiased">
        <Head />
        <div className="relative flex flex-col min-h-screen">
          <div className="flex items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav isPWA={checkPWA()}/>
          </div>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
