import { ArrowRight, ArrowUpToLineIcon, Instagram, MessageCircle, MessageCircleMore, Phone, PhoneCall } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/Logo.png" alt="logo" className="h-10 w-15 sm:h-12 md:h-14 scale-[3.5] sm:scale-[3] ml-8" />
            </div>
            <p className="text-gray-400 text-sm">Turn saving into winning</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Socials</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition flex gap-1">
                  <Instagram className="h-4 mt-px" />Instagram 
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition flex gap-1">
                  <MessageCircleMore className="h-4 mt-px" />Whatsapp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition flex gap-1">
                  <Phone className="h-4 mt-px" />Phone
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Winnerspin. All rights reserved. | Website & Branding by <a className="text-gray-300 font-bold" target="_blank" href="https://ubuzz.in">UBUZZ</a></p>
        </div>
      </div>
    </footer>
  )
}
