import { create } from "zustand";

interface Cell {
  value: string;
  isBold: boolean;
  isItalic: boolean;
}

interface StoreState {
  grid: Cell[][];
  selectedCell: { row: number; col: number } | null;
  updateCell: (row: number, col: number, value: string) => void;
  toggleBold: () => void;
  toggleItalic: () => void;
  setSelectedCell: (row: number, col: number) => void;
  searchTerm: string;
  setSearchQuerry: (term: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  grid: Array(100)
    .fill(null)
    .map(() => Array(26).fill({ value: "", isBold: false, isItalic: false })),
  selectedCell: null,
  searchTerm: "",
  setSearchQuerry: (term: string) => {
    set({ searchTerm: term });
  },
  updateCell: (row, col, value) =>
    set((state) => {
      const newGrid = state.grid.map((rowData) => [...rowData]);
      newGrid[row][col] = { ...newGrid[row][col], value };
      return { grid: newGrid };
    }),
  toggleBold: () =>
    set((state) => {
      if (state.selectedCell) {
        const { row, col } = state.selectedCell;
        const newGrid = state.grid.map((rowData) => [...rowData]);
        newGrid[row][col] = {
          ...newGrid[row][col],
          isBold: !newGrid[row][col].isBold,
        };
        return { grid: newGrid };
      }
      return state;
    }),
  toggleItalic: () =>
    set((state) => {
      if (state.selectedCell) {
        const { row, col } = state.selectedCell;
        const newGrid = state.grid.map((rowData) => [...rowData]);
        newGrid[row][col] = {
          ...newGrid[row][col],
          isItalic: !newGrid[row][col].isItalic,
        };
        return { grid: newGrid };
      }
      return state;
    }),
  setSelectedCell: (row, col) => set({ selectedCell: { row, col } }),
}));
