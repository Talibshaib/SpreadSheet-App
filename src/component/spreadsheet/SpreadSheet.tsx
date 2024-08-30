"use client";

import React from "react";
import { useStore } from "../../store/useStore";

const Spreadsheet = () => {
  const { grid, updateCell, searchTerm, setSelectedCell } = useStore();

  return (
    <div style={gridContainerStyle}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} style={rowStyle}>
          {row.map((cell, colIndex) => (
            <input
              className={cell.value.includes(searchTerm) ? "bg-red-500" : ""}
              key={`${rowIndex}-${colIndex}`}
              value={cell.value}
              onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
              onClick={() => setSelectedCell(rowIndex, colIndex)}
              style={{
                ...cellStyle,
                backgroundColor: cell.value.includes(searchTerm)
                  ? "#fff"
                  : "#E8E2E2",
                fontWeight: cell.isBold ? "bold" : "normal",
                fontStyle: cell.isItalic ? "italic" : "normal",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

// CSS styles as JavaScript objects
const gridContainerStyle: any = {
  overflowY: "auto",
  display: "grid",
  gap: "1px",
  border: "1px solid #ddd",
  backgroundColor: "#f0f0f0",
  padding: "10px",
};

const rowStyle = {
  display: "flex",
};

const cellStyle: any = {
  width: "120px",
  height: "30px",
  padding: "5px",
  margin: "0",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "14px",
  textAlign: "center",
  backgroundColor: "#fff",
  boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.1)",
  borderRadius: "3px",
};

export default Spreadsheet;
