"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";


const Navbar = () => {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-700"
        >
          SRM RE-Colab
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            Features
          </Link>

          <Link
            href="#research"
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            Research
          </Link>

          <Link
            href="#collaboration"
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            Collaboration
          </Link>

          <Link
            href="#contact"
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
x
          <Button variant="outline">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;