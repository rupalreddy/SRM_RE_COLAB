import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";

const PostCard = () => {
  return (
    <div className="bg-white border rounded-3xl p-6">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            R
          </div>

          {/* User Info */}
          <div>

            <h3 className="font-semibold text-lg">
              Rupal Reddy
            </h3>

            <p className="text-sm text-gray-500">
              AI Research Scholar
            </p>

          </div>

        </div>

        {/* Save */}
        <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center transition">

          <Bookmark className="w-5 h-5" />

        </button>

      </div>

      {/* Content */}
      <div className="mt-6">

        <h2 className="text-2xl font-bold leading-relaxed">
          AI-Based Smart Research Collaboration System
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Exploring intelligent academic collaboration using
          real-time communication, publication discovery,
          and automated research networking systems.
        </p>

      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-6">

        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          Artificial Intelligence
        </span>

        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
          Machine Learning
        </span>

        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          Research
        </span>

      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 mt-8 pt-6 border-t">

        <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition">

          <Heart className="w-5 h-5" />

          <span>120 Likes</span>

        </button>

        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition">

          <MessageCircle className="w-5 h-5" />

          <span>24 Comments</span>

        </button>

        <button className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition">

          <Share2 className="w-5 h-5" />

          <span>Share</span>

        </button>

      </div>

    </div>
  );
};

export default PostCard;