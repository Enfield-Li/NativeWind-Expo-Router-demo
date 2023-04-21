import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useBearStore = create<BearState>()(
  immer((set) => ({
    bears: 0,
    increase: (by) =>
      set((state) => {
        state.bears += by;
      }),
  }))
);
