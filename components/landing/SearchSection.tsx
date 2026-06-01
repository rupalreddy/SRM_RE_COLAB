"use client";

import { useState } from "react";

import {
  Search,
  FileText,
  Users,
  Globe,
} from "lucide-react";

const mockResults = [
  {
    type: "Research Paper",
    title:
      "AI-Based Smart Collaboration System",
    icon: FileText,
  },
  {
    type: "Researcher",
    title:
      "Dr. Rajesh Kumar - AI Research",
    icon: Users,
  },
  {
    type: "Collaboration Room",
    title:
      "Cyber Security Research Group",
    icon: Globe,
  },
];

const SearchSection = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Global Research Search
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Discover Research Instantly
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Search publications, researchers,
            collaboration rooms, journals,
            and academic innovations.
          </p>

        </div>

        {/* Search Box */}
        <div
          className="
            bg-gray-50
            dark:bg-zinc-900
            border
            border-gray-200
            dark:border-zinc-800
            rounded-[40px]
            p-8
          "
        >

          <div className="relative">

            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />

            <input
              type="text"
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              placeholder="Search research papers, scholars, collaboration rooms..."
              className="
                w-full
                rounded-3xl
                border
                border-gray-200
                dark:border-zinc-700
                bg-white
                dark:bg-zinc-950
                text-gray-900
                dark:text-white
                pl-16
                pr-6
                py-5
                outline-none
                focus:ring-2
                focus:ring-blue-600
                text-lg
              "
            />

          </div>

          {/* Results */}
          <div className="space-y-5 mt-8">

            {mockResults
              .filter((item) =>
                item.title
                  .toLowerCase()
                  .includes(query.toLowerCase())
              )
              .map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex items-center gap-5
                      bg-white
                      dark:bg-zinc-950
                      border
                      border-gray-200
                      dark:border-zinc-800
                      rounded-3xl
                      p-5
                      hover:shadow-xl
                      transition-all
                      duration-300
                    "
                  >

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center">

                      <Icon className="w-7 h-7 text-blue-700 dark:text-blue-300" />

                    </div>

                    {/* Content */}
                    <div>

                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {item.type}
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                    </div>

                  </div>
                );
              })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default SearchSection;