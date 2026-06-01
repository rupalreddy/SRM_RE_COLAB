"use client";

import {
  Brain,
  Shield,
  HeartPulse,
  Database,
  Bot,
  Cloud,
} from "lucide-react";

const domains = [
  {
    title: "Artificial Intelligence",
    description:
      "Machine Learning, Deep Learning, NLP, and Smart Systems.",
    icon: Brain,
    color: "bg-blue-600",
  },
  {
    title: "Cyber Security",
    description:
      "Ethical Hacking, Security Analysis, and Threat Detection.",
    icon: Shield,
    color: "bg-green-600",
  },
  {
    title: "Healthcare Innovation",
    description:
      "Smart healthcare systems and AI-driven medical solutions.",
    icon: HeartPulse,
    color: "bg-red-500",
  },
  {
    title: "Data Science",
    description:
      "Big Data Analytics, Data Mining, and Visualization.",
    icon: Database,
    color: "bg-purple-600",
  },
  {
    title: "Robotics",
    description:
      "Automation, Robotics Engineering, and Intelligent Machines.",
    icon: Bot,
    color: "bg-orange-500",
  },
  {
    title: "Cloud Computing",
    description:
      "Distributed Systems, Cloud Infrastructure, and DevOps.",
    icon: Cloud,
    color: "bg-cyan-600",
  },
];

const ResearchDomainsSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Research Domains
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Explore Academic Research Areas
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover innovative research domains,
            connect with scholars, and collaborate
            across multiple academic disciplines.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {domains.map((domain, index) => {
            const Icon = domain.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  dark:bg-zinc-900
                  border
                  border-gray-200
                  dark:border-zinc-800
                  rounded-[32px]
                  p-8
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}
                <div
                  className={`
                    w-16 h-16 rounded-2xl
                    ${domain.color}
                    flex items-center justify-center
                    text-white
                    mb-6
                  `}
                >

                  <Icon className="w-8 h-8" />

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {domain.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {domain.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default ResearchDomainsSection;