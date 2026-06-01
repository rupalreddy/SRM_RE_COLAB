import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import RightPanel from "@/components/dashboard/RightPanel";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black p-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[260px_1fr_320px] gap-6">

          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="space-y-6">

            {/* Topbar */}
            <Topbar />

            {/* Dynamic Page Content */}
            {children}

          </div>

          {/* Right Panel */}
          <RightPanel />

        </div>

      </div>

    </main>
  );
}