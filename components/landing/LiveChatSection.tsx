"use client";

import { useState } from "react";

import {
  Send,
  Users,
} from "lucide-react";

const initialMessages = [
  {
    user: "Dr. Rajesh",
    message:
      "Let's finalize the AI collaboration proposal today.",
  },
  {
    user: "Priya",
    message:
      "I completed the NLP research analysis report.",
  },
];

const LiveChatSection = () => {
  const [messages, setMessages] =
    useState(initialMessages);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      {
        user: "You",
        message: input,
      },
    ]);

    setInput("");
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Live Collaboration
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Real-Time Research Discussions
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Communicate instantly with faculties,
            scholars, and collaborators through
            dedicated research discussion rooms.
          </p>

        </div>

        {/* Chat Container */}
        <div
          className="
            bg-white
            dark:bg-zinc-900
            border
            border-gray-200
            dark:border-zinc-800
            rounded-[40px]
            overflow-hidden
            shadow-sm
          "
        >

          {/* Top Bar */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 dark:border-zinc-800">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white">

                <Users className="w-7 h-7" />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  AI Research Collaboration Room
                </h3>

                <p className="text-gray-500 dark:text-gray-400">
                  24 Active Researchers
                </p>

              </div>

            </div>

          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-8 space-y-6">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`
                  flex
                  ${msg.user === "You"
                    ? "justify-end"
                    : "justify-start"}
                `}
              >

                <div
                  className={`
                    max-w-[70%]
                    rounded-3xl
                    px-6
                    py-4
                    ${
                      msg.user === "You"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
                    }
                  `}
                >

                  <p className="font-semibold mb-2">
                    {msg.user}
                  </p>

                  <p>
                    {msg.message}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-zinc-800 p-6">

            <div className="flex gap-4">

              <input
                type="text"
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                placeholder="Type your message..."
                className="
                  flex-1
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-zinc-700
                  bg-gray-50
                  dark:bg-zinc-950
                  text-gray-900
                  dark:text-white
                  px-5
                  py-4
                  outline-none
                  focus:ring-2
                  focus:ring-blue-600
                "
              />

              <button
                onClick={handleSend}
                className="
                  px-6
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  transition
                  flex items-center justify-center
                "
              >

                <Send className="w-5 h-5" />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LiveChatSection;