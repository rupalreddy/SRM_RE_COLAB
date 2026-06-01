"use client";

import {
  FileText,
  Download,
  Eye,
  Star,
} from "lucide-react";

const papers = [
  {
    title:
      "AI-Based Smart Collaboration System For Academic Research",
    author: "Dr. Rajesh Kumar",
    journal: "International Journal of AI Research",
    year: "2026",
    citations: 124,
  },
  {
    title:
      "Automated Meeting Detection Using NLP Techniques",
    author: "Priya Sharma",
    journal: "Smart Systems & Innovation Journal",
    year: "2026",
    citations: 89,
  },
  {
    title:
      "Secure Institutional Collaboration Using AI",
    author: "Arun Prakash",
    journal: "Cyber Intelligence Review",
    year: "2025",
    citations: 67,
  },
];

const ResearchPapersSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Research Publications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Showcase Academic Publications
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover research papers, track citations,
            and explore academic innovations published
            by faculties and scholars.
          </p>

        </div>

        {/* Papers */}
        <div className="space-y-8">

          {papers.map((paper, index) => (
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
                transition-all
                duration-300
              "
            >

              <div className="grid lg:grid-cols-4 gap-8 items-center">

                {/* Left */}
                <div className="lg:col-span-2">

                  <div className="flex items-start gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shrink-0">

                      <FileText className="w-8 h-8" />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                        {paper.title}
                      </h3>

                      <p className="mt-3 text-gray-600 dark:text-gray-300">
                        {paper.author}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Journal */}
                <div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Journal
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {paper.journal}
                  </h4>

                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Published • {paper.year}
                  </p>

                </div>

                {/* Actions */}
                <div className="flex flex-col items-start lg:items-end gap-4">

                  <div className="flex items-center gap-2 text-yellow-500">

                    <Star className="w-5 h-5 fill-yellow-500" />

                    <span className="font-semibold">
                      {paper.citations} Citations
                    </span>

                  </div>

                  <div className="flex items-center gap-4">

                    <button
                      className="
                        flex items-center gap-2
                        px-5 py-3
                        rounded-2xl
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        transition
                      "
                    >

                      <Eye className="w-5 h-5" />

                      View

                    </button>

                    <button
                      className="
                        flex items-center gap-2
                        px-5 py-3
                        rounded-2xl
                        border
                        border-gray-200
                        dark:border-zinc-700
                        text-gray-700
                        dark:text-gray-300
                        hover:bg-gray-100
                        dark:hover:bg-zinc-800
                        transition
                      "
                    >

                      <Download className="w-5 h-5" />

                      PDF

                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ResearchPapersSection;