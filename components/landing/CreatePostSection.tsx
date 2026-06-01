"use client";

import { useState } from "react";

import { Image, FileText, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

const CreatePostSection = () => {
  const [content, setContent] = useState("");

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Share Research
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Publish New Research Ideas
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Collaborate with faculties and scholars by sharing
            innovative academic thoughts and publications.
          </p>

        </div>

        {/* Card */}
        <div
          className="
            bg-gray-50
            dark:bg-zinc-900
            border
            border-gray-200
            dark:border-zinc-800
            rounded-3xl
            p-8
            shadow-sm
          "
        >

          {/* User */}
          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
              R
            </div>

            <div>

              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Rupal Reddy
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                AI Research Scholar
              </p>

            </div>

          </div>

          {/* Textarea */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your research idea..."
            className="
              w-full
              min-h-[180px]
              rounded-2xl
              border
              border-gray-200
              dark:border-zinc-700
              bg-white
              dark:bg-zinc-950
              text-gray-900
              dark:text-white
              p-5
              outline-none
              resize-none
              focus:ring-2
              focus:ring-blue-600
            "
          />

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">

            {/* Left Buttons */}
            <div className="flex items-center gap-3">

              <button
                className="
                  flex items-center gap-2
                  px-4 py-3
                  rounded-2xl
                  bg-blue-100 dark:bg-blue-950
                  text-blue-700 dark:text-blue-300
                  hover:scale-105
                  transition
                "
              >

                <Image className="w-5 h-5" />

                Add Image

              </button>

              <button
                className="
                  flex items-center gap-2
                  px-4 py-3
                  rounded-2xl
                  bg-purple-100 dark:bg-purple-950
                  text-purple-700 dark:text-purple-300
                  hover:scale-105
                  transition
                "
              >

                <FileText className="w-5 h-5" />

                Attach Paper

              </button>

            </div>

            {/* Publish */}
            <Button
              className="rounded-2xl px-6"
            >

              <Send className="w-5 h-5 mr-2" />

              Publish Research

            </Button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CreatePostSection;