"use client";
import Image from "next/image";

export function Founder() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background gradient rays */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-orange-500/10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-30 items-center">
          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-10 bg-gradient-to-br from-yellow-500/10 to-orange-500 rounded-2xl blur-2xl opacity-30" />
              <div className="relative w-140 h-140 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl shadow-yellow-500/30">
                <img
                  src="/image.png"
                  alt="Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Founder Message */}
          <div>
            <div className="mb-6">
              <h3 className="text-yellow-200 text-sm font-bold uppercase tracking-widest mb-2">
                The Pillar Behind Winnerspin
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Founder & CEO
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                At Winnerspin, we believe that financial discipline shouldn't be
                boring. We're revolutionizing how Indians save and invest by
                combining the thrill of winning with the security of structured
                savings.
              </p>

              {/* Typewriter Quote */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-l-4 border-yellow-300/80 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-xl md:text-2xl font-bold text-yellow-300/80 italic">
                  "Empowering financial discipline with exciting rewards for
                  every saver in India."
                </p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Our mission is to make saving accessible, transparent, and
                rewarding. Every member of Winnerspin is not just saving
                money—they're building a better financial future while having
                the chance to win life-changing prizes.
              </p>

              <div className="pt-4">
                <p className="text-yellow-200 font-bold text-lg">
                  Founder & CEO, Winnerspin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
