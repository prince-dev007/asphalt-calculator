import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-gradient-to-b from-black via-black-800 to-black text-white")} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/next-script-for-ga */}
      <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-PFTG681Z8F"
  ></script>
  <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GXCHNG873V');
        `,
      }}
    ></script>
        <SiteHeader />
        <main className="flex-1 ">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  )
}