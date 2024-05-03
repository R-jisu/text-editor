import { create } from "zustand";

interface ElementT {
  tool: string;
  setTool: (el: string) => void;
  resetTool: () => void;
}

export const useSelectedElementStore = create<ElementT>((set) => ({
  tool: "",
  setTool: (tool) => set(() => ({ tool: tool })),
  resetTool: () => set(() => ({ tool: "" })),
}));
