"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  House,
  User,
  FileText,
  Users,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Home",
    icon: House,
    href: "/dashboard",
  },
  {
    title: "Profile",
    icon: User,
    href: "/dashboard/profile",
  },
  {
    title: "Research Papers",
    icon: FileText,
    href: "/dashboard/research",
  },
  {
    title: "Collaborations",
    icon: Users,
    href: "/dashboard/collaborations",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/dashboard/messages",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/dashboard/notifications",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className="
        w-full
        lg:w-64
        bg-white
        dark:bg-zinc-900
        border
        border-gray-200
        dark:border-zinc-800
        rounded-3xl
        p-6
        h-fit
      "
    >

      {/* User */}
      <div className="flex flex-col items-center text-center">

        <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
          R
        </div>

        <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
          Rupal Reddy
        </h2>

        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Research Scholar
        </p>

      </div>

      {/* Menu */}
      <div className="mt-10 flex flex-col gap-2">

        {menuItems.map((item, index) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`
                flex items-center gap-4
                px-4 py-3
                rounded-2xl
                transition
                text-left
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-300"
                }
              `}
            >

              <Icon className="w-5 h-5" />

              <span className="font-medium">
                {item.title}
              </span>

            </Link>
          );
        })}

      </div>

    </aside>
  );
};

export default Sidebar;