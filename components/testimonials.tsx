"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

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
      quote:"I love how Winnerspin combines financial discipline with excitement. Every month feels like a celebration!",
      image: "/happy-woman-winner-with-gold-jewelry.jpg",

    },
    {
      name: "Vikram Singh",
      prize: 'Samsung 65" TV',
      quote: "Best decision ever! The savings plan is flexible and the rewards are incredible. Highly recommended!",
      image: "/man-standing-next-to-car-smiling.jpg",
    },
  ]

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const startAutoplay = () => {
    autoplayRef.current = setInterval(nextSlide, 5000)
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
  }

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [])

  const currentTestimonial = testimonials[currentIndex]
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 px-4 bg-black relative ">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-orange-500/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Winners Speak for Us!</h2>
          <p className="text-yellow-400 text-lg">Real people, real wins, real life-changing moments</p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute -left-2 z-20 p-2 rounded-full bg-yellow-500/80 hover:bg-yellow-500 text-black transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="w-full px-12 md:px-16  relative min-h-[300px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full"
                >
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 ml-4">
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-200 shadow-lg shadow-yellow-500/50">
                          <img
                            src={currentTestimonial.image || "/placeholder.svg"}
                            alt={currentTestimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} className="fill-yellow-200 text-yellow-200" />
                          ))}
                        </div>
                        <p className="text-white text-lg md:text-xl mb-6 italic">"{currentTestimonial.quote}"</p>
                        <div>
                          <p className="bg-clip-text  text-transparent bg-linear-to-b from-yellow-100  to-orange-400 font-bold text-lg md:text-2xl">{currentTestimonial.name}</p>
                          <p className="text-orange-300 text-sm">Won: {currentTestimonial.prize}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextSlide}
              className="absolute -right-2 z-20 p-2 rounded-full bg-yellow-500/80 hover:bg-yellow-500 text-black transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-24 md:mt-8">
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
