import React from "react";

export default function KPIcards({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
