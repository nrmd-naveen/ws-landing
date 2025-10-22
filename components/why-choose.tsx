export function WhyChoose() {
  const reasons = [
    {
      title: "Flexible & Accessible",
      description: "Savings plans designed for everyone, with flexible payment options tailored to your lifestyle",
      icon: "🎯",
      gradient: "from-yellow-500/20 to-orange-500/10",
    },
    {
      title: "Fair & Transparent",
      description: "Lucky draws conducted with complete transparency and integrity you can trust",
      icon: "✨",
      gradient: "from-orange-500/20 to-yellow-500/10",
    },
    {
      title: "Life-Changing Rewards",
      description: "Win amazing prizes including gold, vehicles, electronics, and life-altering cash rewards",
      icon: "🏆",
      gradient: "from-yellow-500/20 to-orange-500/10",
    },
    {
      title: "Build Financial Discipline",
      description: "Enjoy exciting rewards while developing healthy and sustainable saving habits",
      icon: "📈",
      gradient: "from-orange-500/20 to-yellow-500/10",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 text-balance">Why Choose Winnerspin?</h2>
          <p className="text-lg text-gray-400 text-balance max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of financial discipline and exciting rewards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative">
              <div
                className={`relative bg-gradient-to-br ${reason.gradient} backdrop-blur-md rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-yellow-500/20 hover:bg-gradient-to-br hover:from-yellow-500/30 hover:to-orange-500/20`}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 group-hover:from-yellow-400/40 group-hover:to-orange-500/40 transition-all duration-300 border border-yellow-500/30 group-hover:border-yellow-500/50">
                  <span className="text-3xl">{reason.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {reason.description}
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
