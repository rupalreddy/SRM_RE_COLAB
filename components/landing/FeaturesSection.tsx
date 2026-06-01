import SectionTitle from "@/components/shared/SectionTitle";

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
      className="py-24 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <SectionTitle
          badge="Platform Features"
          title="Everything Needed For Modern Research Collaboration"
          description="A professional academic ecosystem for faculties, research scholars, and innovators."
        />

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
                <div
                  key={index}
                  className="group border border-gray-200 dark:border-zinc-700 rounded-3xl p-8 hover:shadow-2xl transition duration-300 hover:-translate-y-2 bg-white dark:bg-zinc-900"
                >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">

                  <Icon className="w-7 h-7 text-blue-700 dark:text-blue-400 group-hover:text-white transition" />

                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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