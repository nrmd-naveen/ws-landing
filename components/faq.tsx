"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Lock, Gift, Users, RefreshCw, Trophy } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      icon: RefreshCw,
      question: "What if I miss a payment?",
      answer:
        "We understand life happens! You have a grace period of 15 days to make your payment without any penalties. If you miss multiple payments, we'll work with you to find a solution that fits your situation.",
    },
    {
      icon: Lock,
      question: "How are the draws conducted?",
      answer:
        "Our draws are conducted transparently using certified random number generation technology. All draws are audited by independent third parties to ensure complete fairness and integrity. Winners are announced live on our platform.",
    },
    {
      icon: RefreshCw,
      question: "Is there a refund policy?",
      answer:
        "Yes! You can withdraw your savings at any time. If you withdraw before the season ends, you forfeit your eligibility for that season's draws, but your principal amount is always yours.",
    },
    {
      icon: Users,
      question: "How are winners selected?",
      answer:
        "Winners are selected through our certified random draw system. Every member who has completed their monthly savings is automatically entered into the draw. The more seasons you participate, the more chances you have to win!",
    },
    {
      icon: Gift,
      question: "What kind of gifts or prizes can I win?",
      answer:
        "Our prize pool includes gold jewelry, vehicles (cars, bikes), electronics (TVs, smartphones, laptops), home appliances, and cash rewards. The prize pool varies by season and is announced at the beginning of each season.",
    },
    {
      icon: Trophy,
      question: "Can I participate in multiple draws?",
      answer:
        "You can participate in both monthly draws and mega draws. The more you save and participate, the higher your chances of winning. There's no limit to how many seasons you can join.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-yellow-500/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle className="text-yellow-500" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-yellow-400 text-lg">Everything you need to know about Winnerspin</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon
            return (
              <div key={index} className="group">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-start gap-4 p-6 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-lg hover:border-yellow-500/50 transition-all duration-300 text-left"
                >
                  <IconComponent className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-yellow-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 bg-yellow-500/5 border-x border-b border-yellow-500/20 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg text-center">
          <p className="text-white mb-4">Still have questions? We're here to help!</p>
          <a
            href="mailto:info@winnerspin.in"
            className="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
