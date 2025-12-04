import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 p-6 hidden md:block bg-white shadow-soft">
      <div className="text-xl font-semibold mb-8">SmartForecast</div>
      <nav className="space-y-3 text-sm text-gray-600">
        <div className="flex items-center gap-3"><span></span> Dashboard</div>
        <div className="flex items-center gap-3"><span></span> Uploads</div>
        <div className="flex items-center gap-3"><span></span> Forecasts</div>
        <div className="flex items-center gap-3"><span></span> Settings</div>
      </nav>
    </aside>
  );
}
