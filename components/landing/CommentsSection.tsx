"use client";

import { useState } from "react";

interface CommentsSectionProps {
  comments: string[];
}

const CommentsSection = ({
  comments,
}: CommentsSectionProps) => {
  const [allComments, setAllComments] = useState(comments);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    setAllComments([
      ...allComments,
      newComment,
    ]);

    setNewComment("");
  };

  return (
    <div className="mt-8 border-t border-gray-200 dark:border-zinc-800 pt-6">

      {/* Existing Comments */}
      <div className="space-y-4">

        {allComments.map((comment, index) => (
          <div
            key={index}
            className="
              bg-gray-100
              dark:bg-zinc-800
              rounded-2xl
              px-5
              py-4
            "
          >

            <p className="text-gray-700 dark:text-gray-300">
              {comment}
            </p>

          </div>
        ))}

      </div>

      {/* Add Comment */}
      <div className="flex gap-4 mt-6">

        <input
          type="text"
          value={newComment}
          onChange={(e) =>
            setNewComment(e.target.value)
          }
          placeholder="Write a comment..."
          className="
            flex-1
            px-5
            py-3
            rounded-2xl
            border
            border-gray-200
            dark:border-zinc-700
            bg-white
            dark:bg-zinc-900
            text-gray-900
            dark:text-white
            outline-none
            focus:ring-2
            focus:ring-blue-600
          "
        />

        <button
          onClick={handleAddComment}
          className="
            px-6
            py-3
            rounded-2xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-medium
            transition
          "
        >

          Post

        </button>

      </div>

    </div>
  );
};

export default CommentsSection;