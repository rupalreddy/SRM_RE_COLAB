"use client";

import { X } from "lucide-react";

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    author: string;
    role: string;
    title: string;
    description: string;
    tags: string[];
  } | null;
}

const ResearchModal = ({
  isOpen,
  onClose,
  post,
}: ResearchModalProps) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6">

      <div className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-200 dark:border-zinc-800 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 flex items-center justify-center transition"
        >

          <X className="w-5 h-5 text-gray-700 dark:text-white" />

        </button>

        {/* Author */}
        <div className="flex items-center gap-4 mb-8">

          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
            {post.author.charAt(0)}
          </div>

          <div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {post.author}
            </h3>

            <p className="text-gray-500 dark:text-gray-400">
              {post.role}
            </p>

          </div>

        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
          {post.title}
        </h2>

        {/* Description */}
        <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {post.description}

          <br /><br />

          This research explores modern academic collaboration
          systems integrated with AI-powered communication,
          publication management, and institutional networking.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-8">

          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="
                px-4 py-2 rounded-full
                bg-blue-100 dark:bg-blue-950
                text-blue-700 dark:text-blue-300
                text-sm font-medium
              "
            >
              {tag}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ResearchModal;