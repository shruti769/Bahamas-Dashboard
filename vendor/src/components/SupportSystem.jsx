"use client";

import { Paperclip, Mic, Send } from "lucide-react";

export default function SupportSystem() {
  const chats = [
    { name: "Archit", active: true },
    { name: "Khushi Arora" },
    { name: "Rahul Meena" },
    { name: "Nina Dov" },
    { name: "Jacob Uszu" },
    { name: "Kat Smith" },
  ];

  return (
    <div className="bg-[#F4F6F8] min-h-screen p-6 flex gap-6">

      {/* LEFT SIDEBAR */}
      <div className="w-80 bg-white rounded-2xl p-4 shadow-sm">
        <input
          placeholder="Search"
          className="w-full mb-4 px-4 py-2 bg-gray-100 rounded-lg text-sm"
        />

        <div className="space-y-3">
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl cursor-pointer ${
                chat.active
                  ? "bg-[#DCEAF2]"
                  : "hover:bg-gray-100"
              }`}
            >
              <p className="font-medium text-sm">{chat.name}</p>
              <p className="text-xs text-gray-400">
                You: hey! We are ready...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">

        {/* Chat Header */}
        <div>
          <h3 className="font-semibold text-lg mb-6">
            Archit
          </h3>

          {/* Messages */}
          <div className="space-y-6">

            {/* Incoming */}
            <div className="flex gap-3 items-start">
              <div className="bg-gray-200 px-4 py-3 rounded-2xl max-w-md text-sm">
                Every adventure is crafted and led by local experts.
                <div className="text-xs text-gray-400 mt-1 text-right">
                  09:20
                </div>
              </div>
            </div>

            {/* Outgoing */}
            <div className="flex justify-end">
              <div className="bg-[#3D90BB] text-white px-5 py-4 rounded-2xl max-w-md text-sm">
                Every adventure is crafted and led by local experts,
                giving you an insider’s view.
                <div className="text-xs mt-1 text-right opacity-80">
                  09:27
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Message Input */}
        <div className="mt-6 flex items-center bg-gray-100 rounded-2xl px-4 py-3">
          <Paperclip size={18} className="text-gray-500" />
          <input
            placeholder="Your message"
            className="flex-1 bg-transparent px-3 text-sm outline-none"
          />
          <Mic size={18} className="text-gray-500 mx-2" />
          <Send size={18} className="text-gray-500" />
        </div>

      </div>
    </div>
  );
}
