"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="py-28 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-700/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700/20 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-blue-400 font-semibold mb-4">
            Join The Future Of Research
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Collaborate Smarter.
            <br />
            Publish Faster.
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            SRM RE-Colab empowers faculties, scholars,
            and innovators with intelligent academic
            collaboration tools built for the future.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8"
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="
                    border-gray-300
                    dark:border-zinc-700
                    text-gray-900
                    dark:text-white
                    hover:bg-gray-100
                    dark:hover:bg-zinc-900
                    "
            >
              Explore Platform
            </Button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CTASection;