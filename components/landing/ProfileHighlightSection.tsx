"use client";

import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

const ProfileHighlightSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Researcher Profile
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Showcase Academic Excellence
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create a professional academic identity with
            publications, collaborations, research domains,
            and institutional achievements.
          </p>

        </div>

        {/* Profile Card */}
        <div
          className="
            bg-gray-50
            dark:bg-zinc-900
            border
            border-gray-200
            dark:border-zinc-800
            rounded-[40px]
            p-10
            shadow-sm
          "
        >

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left */}
            <div className="flex flex-col items-center text-center">

              {/* Avatar */}
              <div className="w-36 h-36 rounded-full bg-blue-600 flex items-center justify-center text-white text-5xl font-bold">
                R
              </div>

              <h3 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                Rupal Reddy
              </h3>

              <p className="text-blue-600 dark:text-blue-400 font-medium mt-2">
                AI Research Scholar
              </p>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate about Artificial Intelligence,
                Machine Learning, and Smart Academic Systems.
              </p>

            </div>

            {/* Right */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

              {/* Card */}
              <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6">

                <GraduationCap className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Research Domain
                </h4>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  Artificial Intelligence, NLP,
                  Smart Collaboration Systems.
                </p>

              </div>

              {/* Card */}
              <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6">

                <BookOpen className="w-10 h-10 text-purple-600 mb-4" />

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Publications
                </h4>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  12 Research Papers Published
                  in International Journals.
                </p>

              </div>

              {/* Card */}
              <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6">

                <Users className="w-10 h-10 text-green-600 mb-4" />

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Collaborations
                </h4>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  Working with 20+ researchers
                  across multiple departments.
                </p>

              </div>

              {/* Card */}
              <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6">

                <Award className="w-10 h-10 text-orange-500 mb-4" />

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Achievements
                </h4>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  Best Research Innovation Award
                  2025 at SRM University.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProfileHighlightSection;