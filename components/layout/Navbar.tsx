"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import ThemeToggle from "@/components/shared/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-black sticky top-0 z-50 transition-colors duration-300">

      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-700 dark:text-blue-400"
        >
          SRM RE-Colab
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="#features"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Features
          </Link>

          <Link
            href="#research"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Research
          </Link>

          <Link
            href="#collaboration"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Collaboration
          </Link>

          <Link
            href="#contact"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </Link>

        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <ThemeToggle />

          <Button variant="outline">
            Login
          </Button>

          <Button>
            Get Started
          </Button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black dark:text-white"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-black transition-colors duration-300">

          <div className="flex flex-col p-6 gap-5">

            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Features
            </Link>

            <Link
              href="#research"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Research
            </Link>

            <Link
              href="#collaboration"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Collaboration
            </Link>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </Link>

            <div className="flex flex-col gap-3 pt-4">

              <Button variant="outline">
                Login
              </Button>

              <Button>
                Get Started
              </Button>

            </div>

          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;