import { create } from "zustand";

interface ElementT {
  element: HTMLParagraphElement | HTMLElement | null;
  parentElement: HTMLParagraphElement | HTMLElement | null;
  setElement: (el: HTMLParagraphElement | HTMLElement) => void;
  setParentElement: (el: HTMLParagraphElement | HTMLElement) => void;
  removeElement: () => void;
}

export const useSelectedElementStore = create<ElementT>((set) => ({
  element: null,
  parentElement: null,
  setElement: (el) => set(() => ({ element: el })),
  setParentElement: (el) => set(() => ({ parentElement: el })),
  removeElement: () => set(() => ({ element: null })),
}));
