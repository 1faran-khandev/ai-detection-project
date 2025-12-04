import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">Sales Forecast Dashboard</h1>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-primary text-white rounded-lg">New Forecast</button>
        <div className="w-8 h-8 rounded-full bg-gray-200" />
      </div>
    </header>
  );
}
