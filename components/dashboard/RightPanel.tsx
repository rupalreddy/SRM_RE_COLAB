const trendingTopics = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cyber Security",
  "Cloud Computing",
];

const meetings = [
  {
    title: "AI Research Meeting",
    time: "Today • 4:00 PM",
  },
  {
    title: "ML Collaboration Discussion",
    time: "Tomorrow • 11:00 AM",
  },
];

const RightPanel = () => {
  return (
    <div className="space-y-6">

      {/* Trending Topics */}
      <div className="bg-white border rounded-3xl p-6">

        <h2 className="text-xl font-bold mb-6">
          Trending Research
        </h2>

        <div className="space-y-4">

          {trendingTopics.map((topic, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-gray-50 hover:bg-blue-50 transition cursor-pointer"
            >

              <p className="font-medium">
                #{topic}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Meetings */}
      <div className="bg-white border rounded-3xl p-6">

        <h2 className="text-xl font-bold mb-6">
          Upcoming Meetings
        </h2>

        <div className="space-y-4">

          {meetings.map((meeting, index) => (
            <div
              key={index}
              className="border rounded-2xl p-4"
            >

              <h3 className="font-semibold">
                {meeting.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {meeting.time}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Announcement */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 text-white">

        <h2 className="text-2xl font-bold">
          Research Grant 2026
        </h2>

        <p className="mt-4 text-blue-100 leading-relaxed">
          Apply now for institutional funding and collaborative
          research opportunities across departments.
        </p>

        <button className="mt-6 bg-white text-blue-700 px-5 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition">

          Explore

        </button>

      </div>

    </div>
  );
};

export default RightPanel;