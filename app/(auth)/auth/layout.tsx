import { TailwindIndicator } from "@/components/tailwind-indicator";
import "@/globals.css";
import Head from "@/head";
import { Layout } from "@/components/r3f/Layout";
export default function AuthLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <body className="min-h-screen w-screen overflow-x-hidden font-sans antialiased">
        <Head />
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">
            <Layout>{children}</Layout>
          </main>
          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}