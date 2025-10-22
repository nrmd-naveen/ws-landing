export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">W</span>
              </div>
              <span className="text-white font-bold">Winnerspin</span>
            </div>
            <p className="text-gray-400 text-sm">Turn saving into winning</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Contact
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
          <p>&copy; 2025 Winnerspin. All rights reserved. | Turning Savings into Winning Dreams</p>
        </div>
      </div>
    </footer>
  )
}
