"use client";

import CommentsSection from "./CommentsSection";

import { useState } from "react";

import {
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

import ResearchModal from "./ResearchModal";

const researchPosts = [
{
  author: "Dr. Rajesh Kumar",
  role: "AI Research Professor",
  title: "AI-Based Smart Research Collaboration System",
  description:
    "Exploring intelligent academic collaboration using real-time communication, publication discovery, and automated networking systems.",
  tags: ["Artificial Intelligence", "Machine Learning", "Research"],
  likes: 120,
  comments: 24,

  commentsData: [
    "Amazing research idea!",
    "Would love to collaborate on this.",
  ],
},
  {
  author: "Priya Sharma",
  role: "Research Scholar",
  title: "Smart Academic Meeting Detection",
  description:
    "A system that automatically extracts academic meetings from institutional emails and syncs them to smart calendars.",
  tags: ["Automation", "NLP", "Smart Systems"],
  likes: 86,
  comments: 18,

  commentsData: [
    "This can improve institutional productivity.",
    "Very innovative approach.",
  ],
},
];

const ResearchFeedSection = () => {
  const [selectedPost, setSelectedPost] = useState<
    (typeof researchPosts)[0] | null
  >(null);

  return (
    <section
      className="
        py-24
        bg-gray-50
        dark:bg-black
        transition-colors
        duration-300
      "
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Research Feed
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Discover Latest Academic Research
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Explore innovative publications, collaboration ideas,
            and academic discussions from faculties and scholars.
          </p>

        </div>

        {/* Feed */}
        <div className="space-y-8 mt-16">

          {researchPosts.map((post, index) => (
            <div
              key={index}
              onClick={() => setSelectedPost(post)}
              className="
                cursor-pointer
                bg-white
                dark:bg-zinc-900
                border
                border-gray-200
                dark:border-zinc-800
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* Author */}
              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                  {post.author.charAt(0)}
                </div>

                <div>

                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {post.author}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.role}
                  </p>

                </div>

              </div>

              {/* Content */}
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-6">

                {post.tags.map((tag, i) => (
                  <span
                    key={i}
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

              {/* Actions */}
              <div className="flex items-center gap-8 mt-8 pt-6 border-t border-gray-200 dark:border-zinc-800">

                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition">

                  <Heart className="w-5 h-5" />

                  {post.likes} Likes

                </button>

                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">

                  <MessageCircle className="w-5 h-5" />

                  {post.comments} Comments

                </button>

                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-500 transition">

                  <Share2 className="w-5 h-5" />

                  Share

                </button>

              </div>

              <CommentsSection
                comments={post.commentsData}
                />

            </div>

            
          ))}

          

        </div>

      </div>

      {/* Modal */}
      <ResearchModal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        post={selectedPost}
      />

    </section>
  );
};

export default ResearchFeedSection;