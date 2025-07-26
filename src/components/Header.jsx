import React from "react";
export default function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Welcome, Aman</h1>
      <span className="text-gray-500">{today}</span>
    </div>
  );
}
