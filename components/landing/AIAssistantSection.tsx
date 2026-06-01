"use client";

import { useState } from "react";

import {
  Sparkles,
  Send,
  Bot,
} from "lucide-react";

const AIAssistantSection = () => {
  const [question, setQuestion] = useState("");

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            AI Research Assistant
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Intelligent Academic Assistance
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get AI-powered support for research ideas,
            publication recommendations, collaboration guidance,
            and academic insights.
          </p>

        </div>

        {/* Main Card */}
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

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>

              <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center text-white mb-6">

                <Bot className="w-10 h-10" />

              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                Your AI Academic Companion
              </h3>

              <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                Discover relevant research papers,
                receive publication recommendations,
                generate collaboration ideas,
                and accelerate academic productivity.
              </p>

              {/* Features */}
              <div className="space-y-4 mt-8">

                <div className="flex items-center gap-3">

                  <Sparkles className="w-5 h-5 text-blue-600" />

                  <p className="text-gray-700 dark:text-gray-300">
                    AI-powered research recommendations
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <Sparkles className="w-5 h-5 text-purple-600" />

                  <p className="text-gray-700 dark:text-gray-300">
                    Smart publication suggestions
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <Sparkles className="w-5 h-5 text-green-600" />

                  <p className="text-gray-700 dark:text-gray-300">
                    Intelligent collaboration matching
                  </p>

                </div>

              </div>

            </div>

            {/* Right */}
            <div
              className="
                bg-white
                dark:bg-zinc-950
                border
                border-gray-200
                dark:border-zinc-800
                rounded-3xl
                p-8
              "
            >

              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Ask AI Assistant
              </h4>

              <textarea
                value={question}
                onChange={(e) =>
                  setQuestion(e.target.value)
                }
                placeholder="Ask about research papers, collaboration ideas, publication opportunities..."
                className="
                  w-full
                  min-h-[180px]
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-zinc-700
                  bg-gray-50
                  dark:bg-zinc-900
                  text-gray-900
                  dark:text-white
                  p-5
                  outline-none
                  resize-none
                  focus:ring-2
                  focus:ring-blue-600
                "
              />

              <button
                className="
                  mt-6
                  w-full
                  flex items-center justify-center gap-3
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-4
                  rounded-2xl
                  font-medium
                  transition
                "
              >

                <Send className="w-5 h-5" />

                Ask AI Assistant

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AIAssistantSection;