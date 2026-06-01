"use client";

import {
  Mail,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";

const detectedMeetings = [
  {
    title: "AI Research Team Meeting",
    time: "10:00 AM",
    date: "12 Aug 2026",
    source: "Detected from SRM institutional email",
  },
  {
    title: "Cyber Security Collaboration Discussion",
    time: "02:30 PM",
    date: "14 Aug 2026",
    source: "Automatically synced from email thread",
  },
];

const SmartMeetingSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Smart Meeting Detection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            AI-Powered Academic Scheduling
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Automatically detect meetings from institutional emails
            and intelligently sync research discussions to calendars.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div
            className="
              bg-gray-50
              dark:bg-zinc-900
              border
              border-gray-200
              dark:border-zinc-800
              rounded-[40px]
              p-10
            "
          >

            <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center text-white mb-8">

              <Mail className="w-10 h-10" />

            </div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Intelligent Email Analysis
            </h3>

            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              SRM RE-Colab uses AI to analyze institutional
              communications and automatically identify
              research meetings, workshops, and collaborations.
            </p>

            {/* Features */}
            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">

                <Sparkles className="w-5 h-5 text-blue-600" />

                <p className="text-gray-700 dark:text-gray-300">
                  Automatic meeting extraction
                </p>

              </div>

              <div className="flex items-center gap-4">

                <Sparkles className="w-5 h-5 text-purple-600" />

                <p className="text-gray-700 dark:text-gray-300">
                  Calendar synchronization
                </p>

              </div>

              <div className="flex items-center gap-4">

                <Sparkles className="w-5 h-5 text-green-600" />

                <p className="text-gray-700 dark:text-gray-300">
                  Smart scheduling recommendations
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div
            className="
              bg-gray-50
              dark:bg-zinc-900
              border
              border-gray-200
              dark:border-zinc-800
              rounded-[40px]
              p-8
            "
          >

            <div className="flex items-center gap-3 mb-8">

              <CalendarDays className="w-8 h-8 text-blue-600" />

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Detected Meetings
              </h3>

            </div>

            <div className="space-y-6">

              {detectedMeetings.map((meeting, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-zinc-950
                    border
                    border-gray-200
                    dark:border-zinc-800
                    rounded-3xl
                    p-6
                  "
                >

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {meeting.title}
                  </h4>

                  <div className="flex items-center gap-3 mt-4 text-gray-600 dark:text-gray-300">

                    <Clock3 className="w-5 h-5 text-blue-600" />

                    {meeting.date} • {meeting.time}

                  </div>

                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    {meeting.source}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SmartMeetingSection;