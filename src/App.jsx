import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KPIcards from "./components/KPIcards";
import CSVUpload from "./components/CSVUpload";
import ForecastPlaceholder from "./components/ForecastPlaceholder";

export default function App() {
  return (
    <div className="min-h-screen flex bg-bg">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6">
        <Header />

        {/* KPI Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <KPIcards title="Predicted Revenue" value="—" />
          <KPIcards title="Top Product" value="—" />
          <KPIcards title="Forecast Accuracy" value="—" />
          <KPIcards title="Inventory Risk" value="—" />
        </div>

        {/* CSV Upload + Forecast */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-2xl shadow-soft p-6">
            <CSVUpload />
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <ForecastPlaceholder />
          </div>
        </div>
      </main>
    </div>
  );
}
