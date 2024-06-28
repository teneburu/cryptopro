import "@/globals.css";
import Head from "@/head";
import Image from "next/image";
import { VertLogo } from "@/components/icons";
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
            <div className='flex flex-col relative w-full min-h-screen items-center justify-center'>
              <Image src="/gradient/gradient-blue-rose.png" alt="Orange Gradient Background Top" fill className="object-cover pointer-events-none -z-10" priority/>
              <VertLogo className='size-40 text-stone-900/90 fill-current mb-8'/>
              <section className='border-2 border-muted/50 rounded-md shadow-md bg-stone-100/30 backdrop-blur-md '>
                {children}
              </section>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}