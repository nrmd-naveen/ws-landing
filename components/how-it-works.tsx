export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Save a Fixed Amount",
      description: "Save a fixed amount monthly till the season ends",
      icon: "💰",
    },
    {
      number: "02",
      title: "Get Onboarded",
      description: "Complete your onboarding and join the community",
      icon: "🔐",
    },
    {
      number: "03",
      title: "Enter & Win",
      description: "Enter monthly & mega draws for life-changing prizes",
      icon: "🎯",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 text-balance">How It Works</h2>
          <p className="text-lg text-gray-400 text-balance max-w-2xl mx-auto leading-relaxed">
            Three elegant steps to transform your savings into life-changing opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-500/30 group-hover:shadow-yellow-500/50 transition-all duration-300">
                    <span className="text-3xl font-bold text-black">{step.number}</span>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-yellow-500/10 to-orange-500/5 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-yellow-500/20 hover:bg-gradient-to-br hover:from-yellow-500/20 hover:to-orange-500/15">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 group-hover:from-yellow-400/40 group-hover:to-orange-500/40 transition-all duration-300 border border-yellow-500/30 group-hover:border-yellow-500/50 mx-auto w-full justify-center">
                  <span className="text-3xl">{step.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-white text-center mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
