import {
  FileText,
  Users,
  MessageSquare,
  BarChart3,
} from "lucide-react";

import Feed from "@/components/dashboard/Feed";
import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Research Papers"
          value="124"
          icon={FileText}
          color="bg-blue-600"
        />

        <StatCard
          title="Collaborations"
          value="48"
          icon={Users}
          color="bg-green-600"
        />

        <StatCard
          title="Messages"
          value="302"
          icon={MessageSquare}
          color="bg-purple-600"
        />

        <StatCard
          title="Analytics"
          value="94%"
          icon={BarChart3}
          color="bg-orange-500"
        />

      </div>

      {/* Feed */}
      <Feed />

    </div>
  );
}