"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">W</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline">Winnerspin</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#prizes" className="text-gray-300 hover:text-yellow-400 transition">
              Prizes
            </a>
            <a href="#rewards" className="text-gray-300 hover:text-yellow-400 transition">
              Rewards
            </a>
            <a href="#benefits" className="text-gray-300 hover:text-yellow-400 transition">
              Benefits
            </a>
          </nav>

          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition">
            Join Now
          </button>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#prizes" className="text-gray-300 hover:text-yellow-400">
              Prizes
            </a>
            <a href="#rewards" className="text-gray-300 hover:text-yellow-400">
              Rewards
            </a>
            <a href="#benefits" className="text-gray-300 hover:text-yellow-400">
              Benefits
            </a>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-semibold rounded-lg">
              Join Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
