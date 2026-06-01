"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="w-11 h-11 rounded-2xl border flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
    >

      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}

    </button>
  );
};

export default ThemeToggle;