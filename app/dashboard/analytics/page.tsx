"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import StatCard from "@/components/dashboard/StatCard";

import {
  FileText,
  Users,
  TrendingUp,
  Eye,
} from "lucide-react";

const analyticsData = [
  {
    month: "Jan",
    papers: 12,
    collaborations: 8,
  },
  {
    month: "Feb",
    papers: 18,
    collaborations: 12,
  },
  {
    month: "Mar",
    papers: 26,
    collaborations: 19,
  },
  {
    month: "Apr",
    papers: 35,
    collaborations: 24,
  },
  {
    month: "May",
    papers: 44,
    collaborations: 31,
  },
  {
    month: "Jun",
    papers: 58,
    collaborations: 42,
  },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total Papers"
          value="182"
          icon={FileText}
          color="bg-blue-600"
        />

        <StatCard
          title="Collaborations"
          value="76"
          icon={Users}
          color="bg-green-600"
        />

        <StatCard
          title="Research Growth"
          value="+24%"
          icon={TrendingUp}
          color="bg-purple-600"
        />

        <StatCard
          title="Profile Views"
          value="12.4K"
          icon={Eye}
          color="bg-orange-500"
        />

      </div>

      {/* Chart */}
      <div
        className="
          bg-white
          dark:bg-zinc-900
          border
          border-gray-200
          dark:border-zinc-800
          rounded-3xl
          p-8
        "
      >

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Research Analytics
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Publication and collaboration growth overview.
          </p>

        </div>

        <div className="h-[450px]">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={analyticsData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="papers"
                stroke="#2563eb"
                strokeWidth={4}
              />

              <Line
                type="monotone"
                dataKey="collaborations"
                stroke="#16a34a"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}