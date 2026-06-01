"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const analyticsData = [
  {
    month: "Jan",
    publications: 12,
  },
  {
    month: "Feb",
    publications: 18,
  },
  {
    month: "Mar",
    publications: 25,
  },
  {
    month: "Apr",
    publications: 32,
  },
  {
    month: "May",
    publications: 40,
  },
  {
    month: "Jun",
    publications: 55,
  },
];

const AnalyticsSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Research Analytics
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Track Academic Growth
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Analyze research productivity, publication trends,
            collaborations, and institutional engagement
            through intelligent analytics.
          </p>

        </div>

        {/* Analytics Card */}
        <div
          className="
            bg-white
            dark:bg-zinc-900
            border
            border-gray-200
            dark:border-zinc-800
            rounded-[40px]
            p-10
            shadow-sm
          "
        >

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">

            <div className="bg-blue-50 dark:bg-blue-950 rounded-3xl p-6">

              <h3 className="text-4xl font-bold text-blue-700 dark:text-blue-300">
                182
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Total Publications
              </p>

            </div>

            <div className="bg-purple-50 dark:bg-purple-950 rounded-3xl p-6">

              <h3 className="text-4xl font-bold text-purple-700 dark:text-purple-300">
                76
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Active Collaborations
              </p>

            </div>

            <div className="bg-green-50 dark:bg-green-950 rounded-3xl p-6">

              <h3 className="text-4xl font-bold text-green-700 dark:text-green-300">
                94%
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Research Engagement
              </p>

            </div>

          </div>

          {/* Chart */}
          <div className="h-[400px]">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={analyticsData}>

                <XAxis
                  dataKey="month"
                  stroke="#888888"
                />

                <YAxis stroke="#888888" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="publications"
                  stroke="#2563eb"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AnalyticsSection;