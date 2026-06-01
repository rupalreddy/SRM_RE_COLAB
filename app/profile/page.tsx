const publications = [
  {
    title: "AI-Based Research Collaboration Platform",
    year: "2026",
  },
  {
    title: "Machine Learning for Smart Academic Networking",
    year: "2025",
  },
];

const skills = [
  "Artificial Intelligence",
  "Machine Learning",
  "React.js",
  "Next.js",
  "Cloud Computing",
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-100 pb-10">

      {/* Banner */}
      <div className="h-72 bg-gradient-to-r from-blue-700 to-indigo-800" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Profile Card */}
        <div className="bg-white rounded-3xl border p-8 -mt-24 relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* Left */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">

              {/* Avatar */}
              <div className="w-36 h-36 rounded-3xl bg-blue-600 text-white flex items-center justify-center text-6xl font-bold border-4 border-white shadow-lg">
                R
              </div>

              {/* Info */}
              <div>

                <h1 className="text-4xl font-bold">
                  Rupal Reddy
                </h1>

                <p className="text-lg text-gray-500 mt-2">
                  AI Research Scholar
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                  Passionate about Artificial Intelligence,
                  Machine Learning, and scalable academic
                  collaboration systems.
                </p>

              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">

              <div className="text-center">

                <h2 className="text-3xl font-bold text-blue-700">
                  12
                </h2>

                <p className="text-gray-500 mt-1">
                  Papers
                </p>

              </div>

              <div className="text-center">

                <h2 className="text-3xl font-bold text-blue-700">
                  8
                </h2>

                <p className="text-gray-500 mt-1">
                  Collaborations
                </p>

              </div>

              <div className="text-center">

                <h2 className="text-3xl font-bold text-blue-700">
                  1.2K
                </h2>

                <p className="text-gray-500 mt-1">
                  Followers
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-6 mt-6">

          {/* Left */}
          <div className="space-y-6">

            {/* Publications */}
            <div className="bg-white border rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Publications
              </h2>

              <div className="space-y-4">

                {publications.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-5 hover:bg-gray-50 transition"
                  >

                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Published • {item.year}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* Activity */}
            <div className="bg-white border rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Recent Activity
              </h2>

              <div className="space-y-5">

                <div className="border-l-4 border-blue-600 pl-4">
                  Published a new AI research paper.
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  Joined Machine Learning collaboration room.
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  Attended Smart Research Workshop.
                </div>

              </div>

            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            {/* Skills */}
            <div className="bg-white border rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

            {/* Contact */}
            <div className="bg-white border rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Contact
              </h2>

              <div className="space-y-4 text-gray-600">

                <p>
                  📧 rupalreddy555@gmail.com
                </p>

                <p>
                  📍 Chennai, India
                </p>

                <p>
                  🎓 SRM Institute of Science and Technology
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}