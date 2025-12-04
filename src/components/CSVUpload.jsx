import React, { useState } from "react";

export default function CSVUpload() {
  const [fileName, setFileName] = useState(null);
  const [preview, setPreview] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const rows = text.split("\n").slice(0, 6); // preview first 5 rows
      setPreview(rows);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Upload Sales CSV</h2>

      {/* Upload Box */}
      <label className="w-full h-40 flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 rounded-xl hover:bg-gray-50 transition">
        <span className="text-gray-600 mb-2">📤 Drag or Click to Upload</span>
        <input type="file" accept=".csv" className="hidden" onChange={handleUpload} />
      </label>

      {/* File Name */}
      {fileName && (
        <div className="mt-4 text-gray-700 text-sm">
          <strong>File:</strong> {fileName}
        </div>
      )}

      {/* Preview */}
      {preview.length > 0 && (
        <div className="mt-4 bg-gray-50 p-3 rounded-xl">
          <h3 className="font-semibold mb-2 text-sm">Preview (first rows):</h3>
          <pre className="text-xs text-gray-700 whitespace-pre-wrap">{preview.join("\n")}</pre>
        </div>
      )}
    </div>
  );
}
