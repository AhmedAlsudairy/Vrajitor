import { GeistSans } from "geist/font/sans";
import "./globals.css";
<<<<<<< HEAD:app/layout.tsx
import Navbar from "@/components/component/navs/nav-bar";
import 'leaflet/dist/leaflet.css'
=======
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
>>>>>>> 44d83014845fc7e349f261406b1b1e2199113e80:src/app/[locale]/layout.tsx

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};


export default  async function  RootLayout({
  children,
  params: {locale}

}: {
  children: React.ReactNode;
  params: {locale: string};

  
}) {

  const messages = await getMessages();

  return (
    <html lang={locale} className={GeistSans.className}>
      <body className="bg-background text-foreground">
<<<<<<< HEAD:app/layout.tsx
      <Navbar />
=======
      <NextIntlClientProvider messages={messages}>
>>>>>>> 44d83014845fc7e349f261406b1b1e2199113e80:src/app/[locale]/layout.tsx

        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
