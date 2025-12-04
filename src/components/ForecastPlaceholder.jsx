import React from "react";

export default function ForecastPlaceholder() {
  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-4">Forecast Output</h2>
      <p className="text-gray-500">
        Upload a CSV to generate trend analysis, revenue prediction & demand insights.
      </p>

      <div className="mt-6 p-6 bg-gray-50 rounded-xl text-sm text-gray-600">
        Your prediction graph will appear here.
      </div>
    </div>
  );
}
