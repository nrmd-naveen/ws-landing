"use client"

import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Save ₹1,000/month and get automatic entries",
  "Zero hidden charges or fees",
  "Transparent and fair draw system",
  "Instant prize notifications",
  "Secure and encrypted transactions",
  "Dedicated customer support",
  "Flexible withdrawal options",
  "Referral bonuses for friends",
]

export function Benefits() {
  return (
    <section id="benefits" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">Why Choose Winnerspin?</h2>
          <p className="text-xl text-gray-400">The smarter way to save and win</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start">
              <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-500/10 to-orange-600/10 border border-yellow-400/30 rounded-2xl p-8 text-center">
          <p className="text-gray-300 mb-4">Join 50,000+ members who are already saving and winning</p>
          <p className="text-3xl font-bold text-yellow-400">₹10 Crores+ in prizes awarded</p>
        </div>
      </div>
    </section>
  )
}
