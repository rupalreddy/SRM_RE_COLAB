import SectionTitle from "@/components/shared/SectionTitle";


const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Professor - AI Research",
    message:
      "SRM RE-Colab transformed how our research teams collaborate and publish papers efficiently.",
  },
  {
    name: "Priya Sharma",
    role: "Research Scholar",
    message:
      "The collaboration rooms and smart meeting system made academic communication seamless.",
  },
  {
    name: "Arun Prakash",
    role: "Data Science Researcher",
    message:
      "A powerful platform for discovering researchers and building meaningful collaborations.",
  },
];

const TestimonialSection = () => {
  return (
    <section id="collaboration" className="py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <SectionTitle
          badge="Testimonials"
          title="What Researchers Say"
          description="Hear from faculties and scholars using SRM RE-Colab for modern academic collaboration."
        />

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-3xl border p-8 shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                {item.name.charAt(0)}
              </div>

              {/* Message */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                "{item.message}"
              </p>

              {/* User */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TestimonialSection;