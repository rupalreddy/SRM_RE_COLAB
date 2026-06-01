"use client";

import {
  Users,
  Lock,
  Globe,
  ArrowRight,
} from "lucide-react";

const rooms = [
  {
    title: "AI Research Lab",
    description:
      "Collaborative room for Artificial Intelligence and Machine Learning innovations.",
    members: 24,
    privacy: "Public",
    icon: Globe,
    color: "bg-blue-600",
  },
  {
    title: "Smart Healthcare Systems",
    description:
      "Research discussions focused on intelligent healthcare technologies.",
    members: 18,
    privacy: "Private",
    icon: Lock,
    color: "bg-purple-600",
  },
  {
    title: "Cyber Security Research",
    description:
      "Advanced collaboration for security analysis and ethical hacking research.",
    members: 31,
    privacy: "Public",
    icon: Globe,
    color: "bg-green-600",
  },
];

const CollaborationRoomsSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Collaboration Rooms
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Join Active Research Communities
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with faculties, scholars, and innovators
            through dedicated collaboration spaces designed
            for academic excellence.
          </p>

        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {rooms.map((room, index) => {
            const Icon = room.icon;

            return (
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
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}
                <div
                  className={`
                    w-16 h-16 rounded-2xl
                    ${room.color}
                    flex items-center justify-center
                    text-white
                    mb-6
                  `}
                >

                  <Icon className="w-8 h-8" />

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {room.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {room.description}
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-zinc-800">

                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">

                    <Users className="w-5 h-5" />

                    {room.members} Members

                  </div>

                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">

                    {room.privacy}

                    <ArrowRight className="w-4 h-4" />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default CollaborationRoomsSection;