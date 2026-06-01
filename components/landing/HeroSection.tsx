"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-zinc-950 dark:to-black transition-colors duration-300">

      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
>

            <p className="text-blue-600 font-semibold mb-4">
              Research Collaboration Platform
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Connect Researchers,
              <span className="text-blue-700">
                {" "}Publish Ideas,
              </span>
              Collaborate Smarter
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              SRM RE-Colab helps faculties and research scholars
              collaborate on innovative research projects,
              publish papers, and communicate seamlessly.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <Button size="lg">
                Get Started
              </Button>

              <Button variant="outline" size="lg">
                Explore Research
              </Button>

            </div>

          </motion.div>

          {/* Right Side Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-zinc-700">

              <div className="space-y-6">

                {/* Card 1 */}
                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
                  <h3 className="font-semibold text-lg">
                    AI Research Collaboration
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Connect with researchers working in Artificial Intelligence,
                    Machine Learning, and Data Science.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
                  <h3 className="font-semibold text-lg">
                    Smart Meeting Detection
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Automatically detect academic meetings
                    from institutional emails and sync them to calendar.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-4 rounded-2xl bg-green-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
                  <h3 className="font-semibold text-lg">
                    Real-time Collaboration
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Dedicated collaboration rooms for
                    research teams with instant communication.
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;