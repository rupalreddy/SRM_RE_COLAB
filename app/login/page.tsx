import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">

      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white px-20">

        <h1 className="text-6xl font-bold leading-tight">
          Welcome Back to
          <br />
          SRM RE-Colab
        </h1>

        <p className="mt-8 text-xl text-blue-100 leading-relaxed">
          Connect researchers, publish innovative ideas,
          and collaborate smarter across departments.
        </p>

      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center bg-gray-50 px-6 py-12">

        <div className="w-full max-w-md bg-white border rounded-3xl p-10 shadow-sm">

          {/* Heading */}
          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Login
            </h2>

            <p className="mt-3 text-gray-500">
              Access your research collaboration account
            </p>

          </div>

          {/* Form */}
          <form className="mt-10 space-y-5">

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
                placeholder="Enter password"
                className="w-full mt-2 px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-600"
              />

            </div>

            {/* Forgot */}
            <div className="flex justify-end">

              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-2xl font-semibold transition"
            >
              Login
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

          {/* Google Login */}
          <button className="w-full border py-3 rounded-2xl font-medium hover:bg-gray-50 transition">

            Continue with Google

          </button>

          {/* Register */}
          <p className="mt-8 text-center text-gray-500">

            Don&apos;t have an account?{" "}

            <Link
              href="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </main>
  );
}