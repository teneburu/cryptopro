import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import "./globals.css";
import { Metadata } from "next";
import Head from "./head";

export const metadata: Metadata = {
  title: "Crypto Pro",
  description: "Découvre les listes des meilleures cryptos pour le Bull Run de 2024 pour faire X20 au minimum",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <body className="min-h-screen w-screen overflow-x-hidden font-sans antialiased">
        <header>
          <Head />
        </header>
        <div className="relative flex min-h-screen flex-col">
          <div className="flex items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav />
          </div>
          <div className="flex-1">{children}</div>
          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}