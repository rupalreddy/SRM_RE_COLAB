"use client";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

const events = [
  {
    title: "AI Research Symposium",
    date: "12 Aug 2026",
    time: "10:00 AM",
    location: "SRM Main Auditorium",
    attendees: 120,
  },
  {
    title: "Cyber Security Collaboration Meet",
    date: "18 Aug 2026",
    time: "02:30 PM",
    location: "Tech Park - Hall B",
    attendees: 75,
  },
  {
    title: "Smart Healthcare Innovation Workshop",
    date: "25 Aug 2026",
    time: "11:00 AM",
    location: "Research Center Block",
    attendees: 90,
  },
];

const UpcomingEventsSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Upcoming Events
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Academic Meetings & Research Events
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed about institutional meetings,
            symposiums, workshops, and collaborative
            academic discussions.
          </p>

        </div>

        {/* Events */}
        <div className="space-y-8">

          {events.map((event, index) => (
            <div
              key={index}
              className="
                bg-gray-50
                dark:bg-zinc-900
                border
                border-gray-200
                dark:border-zinc-800
                rounded-[32px]
                p-8
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              <div className="grid lg:grid-cols-4 gap-8 items-center">

                {/* Left */}
                <div className="lg:col-span-2">

                  <div className="flex items-center gap-3 mb-4">

                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white">

                      <CalendarDays className="w-7 h-7" />

                    </div>

                    <div>

                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        Research Event
                      </p>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {event.title}
                      </h3>

                    </div>

                  </div>

                </div>

                {/* Details */}
                <div className="space-y-4">

                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">

                    <Clock3 className="w-5 h-5 text-blue-600" />

                    {event.date} • {event.time}

                  </div>

                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">

                    <MapPin className="w-5 h-5 text-purple-600" />

                    {event.location}

                  </div>

                </div>

                {/* Attendees */}
                <div className="flex flex-col items-start lg:items-end">

                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 mb-4">

                    <Users className="w-5 h-5 text-green-600" />

                    {event.attendees} Attendees

                  </div>

                  <button
                    className="
                      px-6 py-3
                      rounded-2xl
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      font-medium
                      transition
                    "
                  >

                    Join Event

                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default UpcomingEventsSection;