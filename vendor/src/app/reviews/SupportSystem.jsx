"use client";

import { Paperclip, Mic, Send, Search } from "lucide-react";
import Link from "next/link";

export default function SupportSystem() {

  const chats = [
    {
      name: "Archit",
      message: "You: hey! We are ready...",
      img: "/images/chat1.png",
      active: true,
      unread: 0,
      seen: true,
    },
    {
      name: "Khushi Arora",
      message: "You: hey! We are ready...",
      img: "/images/chat2.png",
      unread: 2,
      seen: false,
    },
    {
      name: "Rahul Meena",
      message: "You: hey! We are ready...",
      img: "/images/chat3.png",
      unread: 1,
      seen: false,
    },
  ];

  return (
    <div className=" min-h-screen flex gap-6 mt-4">

      {/* LEFT SIDEBAR */}
      <div className="w-78   flex flex-col">
        {/* Search Bar */}
        <div className="relative mb-5">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
          <input
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2.5 bg-[#fff] rounded-lg text-sm text-black outline-none"
          />
        </div>

        {/* Chat List */}
        <div className="space-y-2">
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`p-3 flex justify-between items-center gap-4 rounded-lg cursor-pointer transition-colors ${chat.active
                ? "bg-[#3D90BB47]"
                : "hover:bg-gray-50"
                }`}
            >
              <div className="flex gap-2 items-center">
                <img src={chat.img} width={50} height={50} />
                <div>
                  <p className="font-semibold text-[15px] text-[#1A1A1A]">{chat.name}</p>
                  <p className="text-xs text-[#1A1A1A99] mt-0.5">
                    {chat.message}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between gap-1">
                <p className="text-[#1A1A1A99] text-xs">4m</p>

                {/* Show unread count only if > 0 */}
                {chat.unread > 0 ? (
                  <p className="poppins bg-[#F5A220] text-white flex items-center justify-center text-xs h-5 min-w-[20px] px-1 rounded-full">
                    {chat.unread}
                  </p>
                ) : (
                  /* Show double tick if no unread */
                  chat.seen && (
                    <p className="text-[#3D90BB] text-xs font-semibold">
                     <img src="/images/tick.svg" width={20} height={20}/>
                    </p>
                  )
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className="flex-1 bg-white rounded-xl shadow-sm p-6 flex flex-col">

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/chat2.png" width={50} height={50} />
            {/* Chat Header */}
            <div className="">
              <h3 className="font-semibold text-lg text-[#1A1A1A]">
                Archit
              </h3>
              <div className="flex items-center gap-1 font-regular text-xs"><div className="h-[6px] w-[6px] rounded-full bg-[#3D90BB]"></div>Costumer Id-123459998# </div>
            </div>
          </div>
          <Link className="text-[#F5A220] poppins text-sm font-semibold underline" href="#">Ticket Close</Link>
        </div>
        {/* Messages Area */}
        <div className="flex-1 space-y-5 p-6">

          {/* Incoming Message */}
          <div className="flex gap-3 items-end">
            <img src="/images/chat2.png" width={40} height={40} />
            <div className="bg-[#3D90BB1F] px-4 py-3 rounded-2xl max-w-sm">
              <h3 className="font-semibold poppins text-md text-[#3D90BB]">
                Archit
              </h3>
              <p className="text-sm poppins text-[#000000] leading-relaxed">
                Every adventure is crafted and led by local experts, giving you an insider’s view of
                👍
              </p>
              <p className="text-[11px] poppins text-gray-400 mt-1.5 text-right">
                09:20
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-end">
            <img src="/images/chat2.png" width={40} height={40} />
            <div className="bg-[#3D90BB1F] px-4 py-3 rounded-2xl max-w-sm">
              <h3 className="font-semibold poppins text-md text-[#3D90BB]">
                Archit
              </h3>
              <p className="text-sm text-[#000000] poppins leading-relaxed">
                Every adventure is crafted and led by local experts, giving you an insider’s view of
                👍
              </p>
              <p className="text-[11px] poppins text-gray-400 mt-1.5 text-right">
                09:20
              </p>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end items-end gap-2">
            <div className="bg-[#3D90BB] text-white px-4 py-3 rounded-2xl rounded-tr-md max-w-md">
              <p className="text-sm poppins leading-relaxed">
                Every adventure is crafted and led by local
                experts, giving you an insider’s view of island
                traditions, hidden spots
              </p>
              <p className="text-[11px] poppins mt-1.5 text-right opacity-70">
                09:27
              </p>

            </div>
            <img src="/images/chat1.png" width={40} height={40} />
          </div>

        </div>

        {/* Message Input */}
        <div className="mt-6 flex items-center bg-[#E7F1F6] rounded-xl px-4 py-4">
          <Paperclip size={20} className="text-gray-400 cursor-pointer hover:text-gray-600" />
          <input
            placeholder="Your message"
            className="flex-1 bg-transparent px-4 text-sm text-gray-600 outline-none placeholder-gray-400"
          />
          <Mic size={20} className="text-gray-400 mx-2 cursor-pointer hover:text-gray-600" />
          <Send size={20} className="text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>

      </div>
    </div>
  );
}