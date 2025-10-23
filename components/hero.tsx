"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

export function Hero() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      }
      setSparkles((prev) => [...prev, newSparkle].slice(-20))
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(253,224,71,0.2),_rgba(100,10,12,0.12),_black)] pointer-events-none" />


      {/* Animated sparkles */}
      {/* {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animation: "fadeOut 2s ease-out forwards",
          }}
        >
          <Sparkles className="text-yellow-400" size={20} />
        </div>
      ))} */}

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-400/50 rounded-full text-yellow-300 text-sm font-semibold">
            ✨ Turn Saving Into Winning ✨
          </span>
        </div> */}

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance">
          Turn Your Savings{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Into Amazing Gifts!
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-8 text-balance max-w-2xl lg:max-w-3xl mx-auto">
          Join thousands of winners earning amazing rewards while saving. Every rupee saved is a chance to win gold,
          vehicles, cash, and more!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-yellow-400/50 transition transform hover:scale-105">
            Join Now
          </button>
          <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-lg hover:bg-yellow-400/10 transition">
            Login
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
          <div>
            <p className="text-3xl font-bold text-yellow-400">50K+</p>
            <p className="text-gray-400 text-sm">Active Winners</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">₹10L+</p>
            <p className="text-gray-400 text-sm">Gifts & Rewards</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-yellow-400">100%</p>
            <p className="text-gray-400 text-sm">Transparent</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(-20px);
          }
          100% {
            opacity: 0;
            transform: translateY(-60px);
          }
        }
      `}</style>
    </section>
  )
}
