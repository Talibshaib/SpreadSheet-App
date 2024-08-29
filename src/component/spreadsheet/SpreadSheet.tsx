"use client";

import React from "react";

export default function SpreadSheet() {
  return (
    <div className="grid grid-cols-10 gap-1 p-2 border border-gray-300">
      {cells.map((cell, index) => (
        <input
          key={index}
          value={cell}
          onChange={(e) => updateCell(index, e.target.value)}
          className="border p-2 w-20 text-center"
        />
      ))}
    </div>
  );
}
