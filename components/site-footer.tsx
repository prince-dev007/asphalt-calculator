import Link from "next/link"
import { Facebook } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900/50 border-t border-slate-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
              <li><Link href="/disclaimer" className="hover:text-yellow-400">Disclaimer</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-yellow-400">Terms and Conditions</Link></li>

            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Email: asphaltcalculator007@gmail.com</li>
              <li>Phone: (+91) 8299727256</li>
              <li>Address: Noida Sector 135, Uttar Pradesh India</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a target='_blank' href="https://www.facebook.com/profile.php?id=61568290627917" className="text-slate-300 hover:text-yellow-400">
                <Facebook className="w-6 h-6" />
              </a>
              {/* <a href="#" className="text-slate-300 hover:text-yellow-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-yellow-400">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-yellow-400">
                <Instagram className="w-6 h-6" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="text-center text-slate-400 pt-8 border-t border-slate-700">
          <p>© {currentYear} Asphalt Calculator. All rights reserved.</p>
          <p className="mt-2 text-sm">All calculations are estimates. Please consult with a professional for final measurements.</p>
        </div>
      </div>
    </footer>
  )
}