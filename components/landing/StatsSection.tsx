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
    <section className="py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-200 font-semibold mb-4">
            Research Impact
          </p>

          <h2 className="text-4xl font-bold">
            Empowering Academic Innovation
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            SRM RE-Colab creates a connected ecosystem
            for collaborative research and academic excellence.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
            >

              <h3 className="text-5xl font-bold mb-4">
                {item.number}
              </h3>

              <p className="text-blue-100 text-lg">
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