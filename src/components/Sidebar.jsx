import React from "react";
import {
  Menu,
  Home,
  Book,
  CalendarDays,
  Inbox,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const items = [
    { icon: <Home />, label: "Dashboard" },
    { icon: <Book />, label: "Courses" },
    { icon: <CalendarDays />, label: "Calendar" },
    { icon: <Inbox />, label: "Inbox" },
    { icon: <HelpCircle />, label: "Help" },
  ];

  return (
    <>
      {/* Hamburger for small screens */}
      <div className="md:hidden p-4">
        <button onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      <div
        className={`bg-gray-800 text-white h-screen p-4 space-y-4
          ${open ? "block" : "hidden"} md:block
          w-16 md:w-64 transition-all`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded cursor-pointer"
          >
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
