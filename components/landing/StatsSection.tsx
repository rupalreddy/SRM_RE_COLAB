const stats = [
  {
    number: "500+",
    title: "Active Researchers",
  },
  {
    number: "1200+",
    title: "Published Papers",
  },
  {
    number: "350+",
    title: "Research Collaborations",
  },
  {
    number: "25+",
    title: "Departments",
  },
];

const StatsSection = () => {
  return (
    <section id="research" className="py-24 bg-gradient-to-r from-blue-950 via-blue-900 to-purple-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-300 font-semibold mb-4">
            Research Impact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Empowering Academic Innovation
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            SRM RE-Colab creates a connected ecosystem
            for collaborative research and academic excellence.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-8
                text-center
                hover:scale-105
                hover:bg-white/10
                transition-all
                duration-300
                shadow-xl
              "
            >

              <h3 className="text-5xl font-bold mb-4 text-white">
                {item.number}
              </h3>

              <p className="text-gray-300 text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default StatsSection;