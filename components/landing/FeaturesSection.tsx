import {
  FileText,
  Users,
  CalendarDays,
  MessageSquare,
  Search,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Research Publishing",
    description:
      "Publish and manage academic papers with modern collaboration tools.",
    icon: FileText,
  },
  {
    title: "Research Collaboration",
    description:
      "Connect faculties and scholars for innovative research projects.",
    icon: Users,
  },
  {
    title: "Smart Meeting Detection",
    description:
      "Automatically detect institutional meetings from emails.",
    icon: CalendarDays,
  },
  {
    title: "Real-time Chat",
    description:
      "Dedicated collaboration rooms with instant communication.",
    icon: MessageSquare,
  },
  {
    title: "Research Discovery",
    description:
      "Find researchers, domains, publications, and opportunities.",
    icon: Search,
  },
  {
    title: "Secure Authentication",
    description:
      "Access restricted only to official SRM institutional accounts.",
    icon: ShieldCheck,
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-semibold mb-4">
            Platform Features
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Everything Needed For Modern Research Collaboration
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            A professional academic ecosystem for faculties,
            research scholars, and innovators.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group border rounded-3xl p-8 hover:shadow-2xl transition duration-300 hover:-translate-y-2 bg-white"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">

                  <Icon className="w-7 h-7 text-blue-700 group-hover:text-white transition" />

                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;