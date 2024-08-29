import {create} from "zustand";

interface StoreState {
  cells: string[];
  updateCell: (index: number, value: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  cells: Array(1000).fill(""),
  updateCell: (index, value) =>
    set((state) => {
      const newCells = [...state.cells];
      newCells[index] = value;
      return { cells: newCells };
    }),
}));
