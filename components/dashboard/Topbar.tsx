import { Bell, Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-white border rounded-3xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      {/* Left */}
      <div>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back to SRM RE-Colab
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">

          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search research..."
            className="pl-10 pr-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-500 w-[250px]"
          />

        </div>

        {/* Notification */}
        <button className="w-12 h-12 rounded-2xl border flex items-center justify-center hover:bg-blue-50 transition">

          <Bell className="w-5 h-5" />

        </button>

        {/* Avatar */}
        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">
          R
        </div>

      </div>

    </div>
  );
};

export default Topbar;