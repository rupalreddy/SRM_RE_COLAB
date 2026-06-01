import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">

      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-indigo-800 to-blue-700 text-white px-20">

        <h1 className="text-6xl font-bold leading-tight">
          Join
          <br />
          SRM RE-Colab
        </h1>

        <p className="mt-8 text-xl text-blue-100 leading-relaxed">
          Build research collaborations, publish innovative
          papers, and connect with faculties and scholars.
        </p>

      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center bg-gray-50 px-6 py-12">

        <div className="w-full max-w-md bg-white border rounded-3xl p-10 shadow-sm">

          {/* Heading */}
          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Create Account
            </h2>

            <p className="mt-3 text-gray-500">
              Start your academic collaboration journey
            </p>

          </div>

          {/* Form */}
          <form className="mt-10 space-y-5">

            {/* Name */}
            <div>

              <label className="text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-600"
              />

            </div>

            {/* Email */}
            <div>

              <label className="text-sm font-medium">
                Institutional Email
              </label>

              <input
                type="email"
                placeholder="you@srmist.edu.in"
                className="w-full mt-2 px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-600"
              />

            </div>

            {/* Password */}
            <div>

              <label className="text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full mt-2 px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-600"
              />

            </div>

            {/* Confirm Password */}
            <div>

              <label className="text-sm font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full mt-2 px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-600"
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-2xl font-semibold transition"
            >
              Create Account
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">

            <div className="h-px bg-gray-200 flex-1" />

            <span className="text-gray-400 text-sm">
              OR
            </span>

            <div className="h-px bg-gray-200 flex-1" />

          </div>

          {/* Google */}
          <button className="w-full border py-3 rounded-2xl font-medium hover:bg-gray-50 transition">

            Continue with Google

          </button>

          {/* Login */}
          <p className="mt-8 text-center text-gray-500">

            Already have an account?{" "}

            <Link
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </main>
  );
}