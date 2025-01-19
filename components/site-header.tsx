"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { FileText,Info ,Phone,Mail} from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image alt='Asphalt Calculator logo' width="40"
              height="40" src="/assets/new-logo.png"/>
            <p className="text-2xl font-bold text-white">Asphalt Calculator</p>
          </Link>
          <nav>
            <ul className="flex items-center gap-6 text-white-200">
              <li>
                <Link href="/" className="hover:text-yellow-400 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:support@cgpacalc.com" className="hover:text-yellow-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}