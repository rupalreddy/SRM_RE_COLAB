"use client";

import {
  Bell,
  MessageCircle,
  Heart,
  Users,
} from "lucide-react";

const notifications = [
  {
    icon: MessageCircle,
    text: "Dr. Rajesh commented on your research.",
    time: "2 mins ago",
  },
  {
    icon: Heart,
    text: "Priya Sharma liked your publication.",
    time: "10 mins ago",
  },
  {
    icon: Users,
    text: "New collaboration request received.",
    time: "1 hour ago",
  },
];

const NotificationPanel = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Notifications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Stay Updated In Real-Time
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Receive instant updates about collaborations,
            comments, meetings, and research activities.
          </p>

        </div>

        {/* Notification Cards */}
        <div className="space-y-6">

          {notifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  flex items-center gap-5
                  bg-white dark:bg-zinc-900
                  border border-gray-200 dark:border-zinc-800
                  rounded-3xl
                  p-6
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center">

                  <Icon className="w-6 h-6 text-blue-700 dark:text-blue-300" />

                </div>

                {/* Text */}
                <div className="flex-1">

                  <p className="text-gray-900 dark:text-white font-medium">
                    {item.text}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.time}
                  </p>

                </div>

                {/* Bell */}
                <Bell className="w-5 h-5 text-gray-400" />

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default NotificationPanel;