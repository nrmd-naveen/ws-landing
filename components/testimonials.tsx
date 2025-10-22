"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      prize: "Gold Necklace",
      quote: "Winnerspin made saving fun! I never thought I could win something so valuable while building my savings.",
      image: "/happy-woman-winner-with-gold-jewelry.jpg",
    },
    {
      name: "Rajesh Kumar",
      prize: "Honda City Car",
      quote: "The transparency and fairness of the draws gave me confidence. Winning a car was a life-changing moment!",
      image: "/man-standing-next-to-car-smiling.jpg",
    },
    {
      name: "Anjali Patel",
      prize: "iPhone 15 Pro",
      quote:
        "I love how Winnerspin combines financial discipline with excitement. Every month feels like a celebration!",
      image: "/woman-holding-smartphone-happy.jpg",
    },
    {
      name: "Vikram Singh",
      prize: 'Samsung 65" TV',
      quote: "Best decision ever! The savings plan is flexible and the rewards are incredible. Highly recommended!",
      image: "/man-with-thumbs-up-smiling.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-orange-500/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Winners Speak for Us!</h2>
          <p className="text-yellow-400 text-lg">Real people, real wins, real life-changing moments</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 p-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black transition-all duration-300 transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="w-full px-16">
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg shadow-yellow-500/50">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-white text-lg md:text-xl mb-6 italic">"{testimonials[currentIndex].quote}"</p>
                    <div>
                      <p className="text-yellow-400 font-bold text-lg">{testimonials[currentIndex].name}</p>
                      <p className="text-orange-400 text-sm">Won: {testimonials[currentIndex].prize}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 p-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black transition-all duration-300 transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-yellow-500 w-8" : "bg-yellow-500/30 hover:bg-yellow-500/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
